import React from 'react';
import './cart-dropdown-styles.scss';
import CustomButton from '../custom-button/custom-button.compoent';

const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items" />
        <CustomButton>
            GO TO Checkout 
        </CustomButton>
    </div>
)

export default CartDropdown;

