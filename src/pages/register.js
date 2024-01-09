import Header from "../app/components/Header/Header.js";
import Register from "../app/components/Auth/Register.js";
import React from 'react';



function app(){
  return(
    <>
     <div className="container">
    <Header />
    <Register />
      </div> 
    </>
  )
}

export default app;