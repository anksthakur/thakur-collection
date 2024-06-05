import React, { useEffect, useState } from 'react';
import "../../components/buynow/Buynow.css";
import Navbar from '../Navbar';
import { useParams,  useNavigate } from 'react-router-dom'; 
import Data from '../../thakur';

const Buynow = () => {
  const { id } = useParams();
  console.log("Product ID Buy Now:", id);

  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState("");
  const navigate = useNavigate();

  const getApiData = async () => {
    try {
      const productData = Data.find(item => item.id === parseInt(id));
      setProduct(productData);
      console.log("Product Buy Now :", productData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, [id]);

  const handleProceedToBuy = () => {
    navigate("/");
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar/>
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
            <h3>Title : {product.title}</h3>
            <h3>Type : {product.type}</h3>
            <h3 className='item_price'>Price : ${product.price}</h3>
            <div className='add_remove_select'>
      <select>
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
        <h3>SubTotal (1 item) :<span style={{fontWeight:700,color:"#111"}}>${product.price}</span> </h3>
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
