"use client";
import Header from "./components/Header/Header.js";
import Cart from "../pages/cart.js";

import React, {useState, useEffect} from 'react';

function app(){
const [Products, setProducts] = useState([]);

useEffect( () =>{
  const fetchProducts = async () =>{
    const response = await fetch('https://fakestoreapi.com/products/');
    const data = await response.json();
    setProducts(data.slice(0,4));

  };

  fetchProducts();

},[]);

const handleAddToCart = (productId) => {
  const existingItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingItems, productId];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
};

  return(
    <>
    <div className="container">
    <Header />
      <h1 className="color">Latest Product Lists</h1>
      <ul className="product-list">
        {
          Products.map((product) =>(
            <li key={product.id}>
              <img src={product.image} /><br/>
              <div className="product-des">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span>price :<strong> {product.price}</strong> </span> USD
              <button  className="addToCart-btn" onClick={() => handleAddToCart(product.id)}>
              Add to Cart
            </button>
              </div>
              </li>
          )
          )
        }
      </ul>
    </div>
      
    </>
  )
}

export default app;