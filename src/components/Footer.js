import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='footer-text'>
            <h3>Menu</h3>
            <ul className='footer-ul'>
                <NavLink className="footer-nav" to="/"><h5>Home</h5></NavLink>
                <NavLink className="footer-nav" to="/shop"><h5>Shop</h5></NavLink>
                <NavLink className="footer-nav" to="/about-us"><h5>About Us</h5></NavLink>
                <NavLink className="footer-nav" to="/contact-us"><h5>Contact Us</h5></NavLink>
            </ul>
        </div>
        <div className='footer-text'>
            <h3>Categories</h3>
            <ul className='footer-ul'>
                <NavLink className="footer-nav"><h5>Casual</h5></NavLink>
                <NavLink className="footer-nav"><h5>Work & Office</h5></NavLink>
                <NavLink className="footer-nav"><h5>Activewear</h5></NavLink>
                <NavLink className="footer-nav"><h5>Evening Dresses</h5></NavLink>
            </ul>
        </div>
        <div className='footer-text'>
            <h3>Resources</h3>
            <ul className='footer-ul'>
                <NavLink className="footer-nav"><h5>Contact Support</h5></NavLink>
                <NavLink className="footer-nav"><h5>FAQ</h5></NavLink>
                <NavLink className="footer-nav"><h5>NavLinkve Chat</h5></NavLink>
                <NavLink className="footer-nav"><h5>Returns</h5></NavLink>
            </ul>
        </div>
        <div className='footer-text'>
            <h3>Social Media</h3>
            <ul className='footer-ul'>
                <NavLink className="footer-nav"><h5>Facebook</h5></NavLink>
                <NavLink className="footer-nav"><h5>Twitter</h5></NavLink>
                <NavLink className="footer-nav"><h5>Instagram</h5></NavLink>
                <NavLink className="footer-nav"><h5>Pinterest</h5></NavLink>
            </ul>
        </div>
    </div>
    <hr></hr>
   
    </>
  )
}

export default Footer
