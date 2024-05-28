import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Shop from './components/Shop';
import ContactUs from './components/ContactUs';
import Home from './components/Home';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <div className="background-image">
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

function AppContent() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <>
      <Navbar />
      <Banner pathName={currentPath} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
