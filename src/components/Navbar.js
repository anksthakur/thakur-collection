import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';


const Navbar = ({currentPath}) => {

  return (
    <>
      <div className='navbar-main' style={{ backgroundColor: `${currentPath?.split('/')[1] === 'product' ? 'black' : ""}` }}>

        <div className='wrapper' >
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
              <NavLink to="/cart"><i className="fa-solid fa-lg fa-bag-shopping"></i></NavLink>
              <p>0</p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
