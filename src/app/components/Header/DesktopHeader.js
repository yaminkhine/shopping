import React from "react";
import Link from 'next/link';
const DesktopHeader = () =>{
    return(
        <>
      <div className="header">
      <div className="logo"><h1>LOGO HERE</h1></div>
       <div className="nav-bar">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Products</Link></li>
            <li><Link href="/contact">Contact Us </Link></li>
            <li><Link href="/cart">Cart</Link></li>
        </ul>
       </div>
       </div>
        </>
    )

}

export default DesktopHeader;