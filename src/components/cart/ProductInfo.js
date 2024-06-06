import React, { useEffect, useState } from 'react';
import "../../components/cart/Product.css";
import Data from '../../thakur';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isError, setIsError] = useState("");

  const getApiData = async () => {
    try {
      const productData = Data.find(item => item.id === parseInt(id));
      setProduct(productData);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, [id]);

  const addToCart = () => {
    if (product) {
      // Get the existing cart data from localStorage
      const existingCart = JSON.parse(localStorage.getItem('cartProducts')) || [];

      // Check if the product is already in the cart
      const existingProductIndex = existingCart.findIndex(item => item.id === product.id);
      
      if (existingProductIndex !== -1) {
        // If the product exists in the cart, increase its quantity
        existingCart[existingProductIndex].quantity += 1;
        toast.warning("Product already Added", { position: "top-center", theme: "colored" });
      } else {
        // If the product does not exist in the cart, add it with quantity 1
        existingCart.push({ ...product, quantity: 1 });
        toast.success("Item added successfully", { position: "top-center", theme: "colored" });
        
        // Refresh the page after 2 seconds
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }

      // Save the updated cart data back to localStorage
      localStorage.setItem('cartProducts', JSON.stringify(existingCart));
      // Update the component state to re-render
      setProduct({ ...product });
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar style={{ background: "blue" }} />
      <div className="product_section">
        <div className="product_container">
          <div className="left_product">
            <img src={product.image} alt={product.name} />
            <div className="product_btn">
              <button onClick={addToCart} className='product_btn1'>Add To Cart</button>
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
      {isError && <div className="error">Error: {isError}</div>}
      <ToastContainer />
      <Footer />
    </>
  );
};

export default ProductInfo;
