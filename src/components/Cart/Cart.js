import React from 'react';

const Cart = (props) => {
    const {productName} = props.cart
    return (
        <div>
            <h3>Name: {productName}</h3>
        </div>
    );
};

export default Cart;