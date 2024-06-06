import React, { useEffect, useState } from 'react';
import "../page/Buynow.css";

import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Buynow = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const cartProduct = localStorage.getItem('cartProduct');
    if (cartProduct) {
      setProduct(JSON.parse(cartProduct));
    } else {
      setIsError("No product found in cart");
    }
  }, [id]);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantity(newQuantity);
  };

  const handleProceedToBuy = () => {
    navigate("/");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const totalPrice = product.price * quantity;

  return (
    <>
      <Navbar />
      <div className='buynow_section'>
        <div className="buynow_container">
          <div className="left_buy">
            <h1>Shopping Cart</h1>
            <p>Select all items</p>
          </div>
        </div>
        <div className="item_container">
          <img src={product.image} alt={product.name} />
          <div className="item_details">
            <h3>Title : {product.name}</h3>
            <h3>Type : {product.category}</h3>
            <h3 className='item_price'>Price : ${totalPrice}</h3>
            <div className='add_remove_select'>
              <select value={quantity} onChange={handleQuantityChange}>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </select>
              <button className='remove-btn' style={{ cursor: "pointer" }}>Delete</button>
            </div>
          </div>
        </div>
        <div className='sub_item'>
          <h3>SubTotal ({quantity} item) :<span style={{ fontWeight: 700, color: "#111" }}>${totalPrice}</span></h3>
        </div>
        {isError && <div>Error: {isError}</div>}
        <div className="right_buy">
          <button className='rightbuy_btn' onClick={handleProceedToBuy}>Proceed To Buy</button>
        </div>
      </div>
    </>
  );
};

export default Buynow;
