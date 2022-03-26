import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Swal from 'sweetalert2'
import './Hero.css'
import QnA from '../QnA/QnA';

const Hero = () => {
    const [products , setProducts] = useState([]);
    const [carts , setCarts] = useState([]);
    const [qnA , setQnA] = useState([]);
    const [randomNames , setRandomNames] = useState([]);
    useEffect(()=>{
        fetch('dummyData.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    useEffect(()=>{
        fetch('QuestionAnswer.json')
        .then(res=>res.json())
        .then(data => setQnA(data))
    },[])

// add item to cart Handler  
const cartHandler = (selectedProduct)=>{
    const newCart = [...carts , selectedProduct];
    const exists = carts.find(product => product.id === selectedProduct.id );
  
   
     if(carts.length > 3 ){

        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Not More then 4 Item',
          })
    }
    else if(!exists ){
        setCarts(newCart);
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Already Added',
          })
          
        
    }

}
// random Name Or Item Generator     
const randomNumber = (carts)=>{
    console.log(carts)

        const randomName = carts[Math.floor(Math.random() * carts.length)];
        setRandomNames(randomName);
 
          Swal.fire({
            title: `Your Lucky Product is: <b>${randomName.productName}</b>`,
            width: 600,
            padding: '3em',
            color: '#716add',
            backdrop: `
              rgba(0,0,123,0.4)
              url("/images/nyanchu-nyan-cat.gif")
              left top
              no-repeat
            `
          })
   
}
// Cart Clear Handler
const clearCart =()=>{
    setCarts([])
    setRandomNames([])
}
const trashHandler= (id)=>{
    console.log(id);

    const newList = carts.filter((item) => item.id !== id);
    setCarts(newList);
    console.log(newList);
}

    return (
        <>
            <div className="container" id="HeroArea">
                
                <div className="row">
                    <div className="col-lg-9 col-md-7 col-sm-12">
                        <div className="row allCards">
                          {products.map(product => <Product key={product.id} product={product} cartHandler={cartHandler}  /> )}  
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12">
                        <div className="cartItem">
                            <h3> {carts.map(cart=> <Cart key={cart.id} cart={cart} trashHandler={trashHandler} />)} </h3>   
                            
                            <div className="buttonGrp">
                                <button onClick={()=>randomNumber(carts)} className="btn btn-success">Random Selector</button> 
                                <button onClick={clearCart} className="btn btn-danger">Remove Items</button> 
                            </div>
                        </div>
                    </div>
                </div>
                {qnA.map(qnA => <QnA key={qnA.id} qnA={qnA} />)}
            </div>
        </>
    );
};

export default Hero;