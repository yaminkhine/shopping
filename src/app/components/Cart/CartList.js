import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const CartList = () => {
  const [cartItems, setCartItems] = useState([]);

  const fetchCartItems = async () => {
    try {
      const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
      const response = await fetch(`https://fakestoreapi.com/products/`);
      const products = await response.json();
      const cartProducts = products.filter(product => storedItems.includes(product.id));
      setCartItems(cartProducts);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const removeFromCart = (productId) => {
    const storedItems = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = storedItems.filter(item => item !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

   
    fetchCartItems();
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <ul className="product-list cart-list">
        {cartItems.map(item => (
          <li key={item.id}>
            <img src={item.image} /><br/>
              <div className="product-des">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span>price :<strong> {item.price}</strong> </span> USD
              <button className="removeFromCart-btn" onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
              </div>
          </li>
        ))}
      </ul>
      <div className="total-price">
  {cartItems.length > 0 && (
    <>
      <p>
        <strong>Total Price:</strong> ${calculateTotalPrice()}
      </p>
      <Link href="/checkout" className='checkout-btn'>Proceed To Checkout</Link>
    </>
  )}
</div>


      {cartItems.length == 0 && <p className='Empty-Cart'> <strong>Empty Cart!! Please Vist <Link href='/'>Home</Link>  to buy.</strong></p>}


    </div>
  );
};

export default CartList;
