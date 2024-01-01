import Header from "../app/components/Header/Header.js";
import CartList from "../app/components/Cart/CartList.js";
import React from 'react';



function app(){
  return(
    <>
     <div className="container">
    <Header />
    <CartList />
      </div> 
    </>
  )
}

export default app;