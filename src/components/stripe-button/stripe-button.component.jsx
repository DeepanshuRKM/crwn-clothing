import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_fQqavyQjqz21Sh5MhUJ0v7Sc00i1lEtWOV";

    const onToken = token => {
        console.log(token);

        alert('Payment successfull')
    };

    return (
        <StripeCheckout 
            label="Pay Now"
            name="Crwn clothing Ltd."
            billingAddress=""
            shippingAddress=""
            image="https://sendeyo.com/up/d/f3eb2117da"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;