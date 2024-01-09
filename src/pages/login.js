import Header from "../app/components/Header/Header.js";
import Login from "../app/components/Auth/Login.js";
import React from 'react';



function app(){
  return(
    <>
     <div className="container">
    <Header />
    <Login />
      </div> 
    </>
  )
}

export default app;