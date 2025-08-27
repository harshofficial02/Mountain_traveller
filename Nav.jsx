import React from 'react'
import logo from "./images/logo.jpg";
import './navstyle.css'

function Nav() {
  return (
    <>
      <div className="nav-main">

        <div className="logo">
            <img src={logo} alt="" />
        </div>

        <div className="nav-links">
            <ul className="nav-list">
                <li>HOME</li>
                <li>EXPLORE</li>
                <li>NEWS</li>
                <li>MAGAZIN</li>
                <li>MAPS</li>
                <li>TRAVELS</li>
                <li>SHOP</li>
            </ul>
        </div>
        
      </div>
    </>
  )
}

export default Nav
