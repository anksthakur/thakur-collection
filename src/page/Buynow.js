import React, { useEffect, useState } from 'react';
import "./Buynow.css";
import { NavLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Buynow = () => {
  //state holds the products in the shopping cart
  const [cartProducts, setCartProducts] = useState([]);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    //
    const storedCartProducts = JSON.parse(localStorage.getItem('cartProducts')) || [];
    if (storedCartProducts.length > 0) {
      setCartProducts(storedCartProducts);
    } else {
      setIsError("No products in cart");
    }
  }, []);

  const handleQuantity = (index, event) => {
    const newQuantity = parseInt(event.target.value);
    const updatedCartProducts = [...cartProducts];
    updatedCartProducts[index].quantity = newQuantity;
  
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
  };

  const handleRemove = (index) => {
    const updatedCartProducts = cartProducts.filter((_, i) => i !== index);
    setCartProducts(updatedCartProducts);
    localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    toast.error("Item deleted successfully", { position: "top-center", theme: "colored" });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  if (isError) {
    return <div>{isError}</div>;
  }

  return (
    <>
      <Navbar />
      <ToastContainer/>
      <div className='buynow_section'>
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
          </div>
        </div>
        {cartProducts.map((product, index) => {
          const totalPrice = product.price.toFixed(2) * (product.quantity || 1);
          return (
            <div key={`${product.id}-${index}`} className="item_container">
              <img src={product.image} alt={product.name} />
              <div className="item_details">
                <h3>Title : {product.name}</h3>
                <h3>Type : {product.category}</h3>
                <h3 className='item_price'>Price : ${totalPrice.toFixed(2)}</h3>
                <div className='add_remove_select'>
                  <select 
                    value={product.quantity || 1} 
                    onChange={(event) => handleQuantity(index, event)}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                  </select>
                  <button 
                    className='remove-btn' 
                    style={{ cursor: "pointer" }}
                    onClick={() => handleRemove(index)}>
                    Delete
                  </button>
                 
                </div>
              </div>
            </div>
          );
        })}
        <div className='sub_item'>
          <h3>
            SubTotal ({cartProducts.reduce((acc, product) => acc + (product.quantity || 1), 0)} item) :
            <span style={{ fontWeight: 700, color: "#111" }}>
              ${cartProducts.reduce((acc, product) => acc + product.price.toFixed(2) * (product.quantity || 1), 0)}
            </span>
          </h3>
        </div>
        <div className="right_buy">
          <NavLink to="/payment"><button className='rightbuy_btn'>Proceed To Buy</button></NavLink>
        </div>
      </div>
    </>
  );
};

export default Buynow;
