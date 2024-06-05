import React, { useEffect, useState } from 'react';
import "../../components/cart/Product.css";
import Data from "../../thakur";
import { NavLink, useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

const ProductInfo = () => {
  // Extracting the product id from the URL parameters
  const { id } = useParams();
  console.log("Product ID :", id);

  // Store the product information
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      // Product in Data array that matches the id
      const productData = Data.find(item => item.id === parseInt(id));
      setProduct(productData);
      console.log("Product :", productData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar style={{background:"blue"}}/>
      <div className="product_section">
        <div className="product_container">
          <div className="left_product">
            <img src={product.image} alt={product.name} />
            <div className="product_btn">
              {/* Added NavLink to navigate to "/buynow" page */}
              <NavLink to={`/buynow/${id}`}>
                <button className='product_btn1'>Add To Cart</button>
              </NavLink>
            </div>
          </div>
          <div className="right_product">
            <h3>{product.name}</h3>
            <h4>{product.category}</h4>
            <h4>Quantity: {product.quantity}</h4>
            <h4>${product.price} & Free Shipping</h4>
            <p className='description'>About the item: <span style={{ color: '#565959', fontSize: 14, fontWeight: 500, letterSpacing: '0.4px' }}>{product.description}</span></p>
          </div>
        </div>
      </div>
      {isError && <div>Error: {isError}</div>}
      <Footer/>
    </>
  );
};

export default ProductInfo;
