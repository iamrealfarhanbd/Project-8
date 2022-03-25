import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Hero.css'

const Hero = () => {
    const [products , setProducts] = useState([])
    const [carts , setCarts] = useState([])
    const [randomNames , setRandomNames] = useState([])
    useEffect(()=>{
        fetch('dummyData.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])


// add item to cart Handler  
const cartHandler = (selectedProduct)=>{
    const newCart = [...carts , selectedProduct];
    const exists = carts.find(product => product.id === selectedProduct.id );
    if(!exists && carts.length < 4){
        setCarts(newCart);
    }else{
        alert('already added')
    }
    console.log(carts.id)
    console.log(carts)
}
// random Name Or Item Generator     
const randomNumber = (carts)=>{
    console.log(carts)
    if(carts.length >= 1 ){
        const randomName = carts[Math.floor(Math.random() * carts.length)];
        setRandomNames(randomName);
        console.log(randomName);
    }else{
        console.log("oooo")
    }
}
// Cart Clear Handler
const clearCart =()=>{
    setCarts([])
    setRandomNames([])
}
    return (
        <div>
            <div className="container" id="HeroArea">
                <div className="row">
                    <div className="col-md-8">
                        <div className="allCards">
                          {products.map(product => <Product key={product.id} product={product} cartHandler={cartHandler}  /> )}  
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cartItem">
                            <h3> {carts.map(cart=> <Cart key={cart.id} cart={cart} />)} </h3>   
                            <h3> Name: {randomNames.productName} </h3>   
                            <button onClick={()=>randomNumber(carts)}>Randorm</button> 
                            <button onClick={clearCart}>clearCart</button> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;