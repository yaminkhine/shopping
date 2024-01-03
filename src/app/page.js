"use client";
import Header from "./components/Header/Header.js";
import Cart from "../pages/cart.js";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products/');
      const data = await response.json();
      setProducts(data.slice(0, 4));
    };

    fetchProducts();
  }, []);

  const [buttonTexts, setButtonTexts] = useState({});

  const handleAddToCart = (productId) => {
    const existingItems = JSON.parse(localStorage.getItem('cart')) || [];

    if (!existingItems.includes(productId)) {
      const updatedCart = [...existingItems, productId];
      localStorage.setItem('cart', JSON.stringify(updatedCart));

      // Update the button text for the specific product
      setButtonTexts((prevButtonTexts) => ({
        ...prevButtonTexts,
        [productId]: 'View Cart',
      }));
    }
  };

  return (
    <div className="container">
      <Header />
      <h1 className="color">Latest Product Lists</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} /><br />
            <div className="product-des">
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span>price: <strong>{product.price}</strong> </span> USD
              <button className="addToCart-btn" onClick={() => handleAddToCart(product.id)}>
                {buttonTexts[product.id] ? (
                    <a href="/cart">{buttonTexts[product.id]}</a>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
