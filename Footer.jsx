import React from 'react'
import './footer.css'
import logo from './Images/logo.jpg'

function Footer() {
return (
    <>
        <footer className="footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      <p className="footer-text">© {new Date().getFullYear()} Harsh Kumar. All rights reserved.</p>
    </footer>
    </>
)
}

export default Footer
