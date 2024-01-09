import Header from "../app/components/Header/Header.js";
import CheckoutList from "../app/components/Checkout/CheckoutList.js";
import React from 'react';



function app(){
  return(
    <>
     <div className="container">
    <Header />
    <CheckoutList />
      </div> 
    </>
  )
}

export default app;