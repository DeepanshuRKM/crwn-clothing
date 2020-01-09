import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCS6ecPKgbPbWIaXR4scjlRDXcj4CHqBlA",
    authDomain: "crwn-db-2b54b.firebaseapp.com",
    databaseURL: "https://crwn-db-2b54b.firebaseio.com",
    projectId: "crwn-db-2b54b",
    storageBucket: "crwn-db-2b54b.appspot.com",
    messagingSenderId: "716062337946",
    appId: "1:716062337946:web:32df2b4a75ea6ea93d6823",
    measurementId: "G-7203NZE3MW"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;