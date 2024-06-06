import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './page/AboutUs';
import Shop from './page/Shop';
import Admin from './page/Admin';
import ContactUs from './page/ContactUs';
import Home from './page/Home';
import ProductInfo from './components/cart/ProductInfo';
import Buynow from './page/Buynow';
import ErrorPage from './ErrorPage';
import Payment from './page/Payment';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/admin' element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/buynow" element={<Buynow />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
