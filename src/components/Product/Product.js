import React from 'react';
import './Product.css'

const Product = (props) => {
    const {product,cartHandler} = props
  const {productName,price,imageUrl} = product;
    return (
        <>
            <div className="card" >
           
           <div className="card-body">
               <img src={imageUrl} style={{height: '18rem'}} className="card-img-top" alt="..." />
               <h5 className="card-title">{productName}</h5>
               <p className="card-text">{price}</p>
               <button onClick={()=>cartHandler(product)} className="btn btn-primary">Go somewhere</button>
           </div>
           </div>
        </>
    );
};

export default Product;