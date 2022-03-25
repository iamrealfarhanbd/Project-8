import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Swal from 'sweetalert2'
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
  
   
     if(carts.length > 3 ){
        Swal.fire('Not More then 4 Item');
    }
    else if(!exists ){
        setCarts(newCart);
    }
    else{
        Swal.fire('Already Added');
    }
    console.log(carts.id)
    console.log(carts)
}
// random Name Or Item Generator     
const randomNumber = (carts)=>{
    console.log(carts)

        const randomName = carts[Math.floor(Math.random() * carts.length)];
        setRandomNames(randomName);
        console.log(randomName);
        Swal.fire(
            'Luck Name!',
            `Product Is ${randomName.productName}`,
            'success'
          )
   
}
// Cart Clear Handler
const clearCart =()=>{
    setCarts([])
    setRandomNames([])
}
    return (
        <>
            <div className="container" id="HeroArea">
                
                <div className="row">
                    <div className="col-md-8">
                        <div className="allCards">
                          {products.map(product => <Product key={product.id} product={product} cartHandler={cartHandler}  /> )}  
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="cartItem ">
                            <h3> {carts.map(cart=> <Cart key={cart.id} cart={cart} />)} </h3>   
                            
                            <div className="buttonGrp">
                                <button onClick={()=>randomNumber(carts)} className="btn btn-success">Random Name</button> 
                                <button onClick={clearCart} className="btn btn-danger">Remove Name</button> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;