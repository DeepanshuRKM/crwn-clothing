import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //sunscription from firebase for authentication
    //auth.onAuthStateChanged is a listner,  it listen to auth state change (log in log out) event
    // It  return a function that cancel the listener, 
    // this.unsubscribeFromAuth it simply remove the listener firebase attached to your client
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user)
      console.log("Compoent did mount")
    })
  }

  componentWillUnmount() {
    //It will handle Memory leak
    this.unsubscribeFromAuth();
    console.log("Compoent will unmount")
  }
  
  

  render() {
    return (
      <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
