import React from 'react';

const Cart = (props) => {
    const {productName} = props.cart
    return (
        <div>
            <h3>Product: {productName}</h3>
        </div>
    );
};

export default Cart;