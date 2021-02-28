import React from 'react';
import SelectedCountry from '../SelectedCountry/SelectedCountry';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <h3> <small>Selected Countries : {cart.length} </small></h3>
            <div className="select-country">
                <ul>
                {
                    cart.map(country => <SelectedCountry country={country}></SelectedCountry>)
                }
                </ul>
            </div>
        </div>
    );
};

export default Cart;