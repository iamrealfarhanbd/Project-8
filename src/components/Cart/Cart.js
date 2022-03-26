import React from 'react';
import './Cart.css';
import {  faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = (props) => {
    const {productName,imageUrl,id} = props.cart;
    const {trashHandler}=props;
     
    return (
        <>
           <div id="cartItem">
            <img src={imageUrl} alt="" />
            <h3>  {productName}</h3>
            <button onClick={()=>trashHandler(id)} className='btn btn-danger'><FontAwesomeIcon icon={faTrashCan} /></button>
           </div>
        </>
    );
};

export default Cart;