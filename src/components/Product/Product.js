import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product,cartHandler} = props
  const {productName,price,imageUrl} = product;
    return (
        <>
            <div className="card" >
           
           <div className="card-body" id="card">
               <img src={imageUrl} style={{height: '15rem'}} className="card-img-top" alt="..." />
               <h5 className="card-title">Product Name: {productName}</h5>
               <p className="card-text">Product Price: {price} Tk</p>
               <button onClick={()=>cartHandler(product)} className="btn btn-primary">Add To Cart</button>
           </div>
           </div>
        </>
    );
};

export default Product;