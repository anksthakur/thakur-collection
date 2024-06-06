import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartItemCount(cartData.length);
  }, []);

  return (
    <>
      <div className='navbar-main'>
        <div className='wrapper'>
          <nav className="navbar">
            <div className='menu'>
              <ul>
                <li><NavLink className="nav" to="/">Home</NavLink></li>
                <li><NavLink className="nav" to="/shop">Shop</NavLink></li>
                <li><NavLink className="nav" to="/about-us">About Us</NavLink></li>
                <li><NavLink className="nav" to="/contact-us">Contact Us</NavLink></li>
              </ul>
            </div>
            <div className='logo'>
              <img src='/logo1.svg' alt='logo' />
            </div>
            <div className='search-cart'>
              <i className="fa-solid fa-lg fa-magnifying-glass"></i>
              <div className="cart-i-p">
                <NavLink to="/buynow">
                  <i className="fa-solid fa-lg fa-bag-shopping"></i>
                </NavLink>
                <p>{cartItemCount}</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
