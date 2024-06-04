import React from 'react';
import { BrowserRouter as Router , Routes , Route, useLocation} from 'react-router-dom';
import './App.css';
import AboutUs from './page/AboutUs';
import Shop from './page/Shop';
import Admin from './page/Admin';
import ContactUs from './page/ContactUs';
import Home from './page/Home';
import ProductInfo from './components/cart/ProductInfo';
import Buynow from './components/buynow/Buynow';

function App() {
  return (
    <div>
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
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductInfo />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
    </>
  );
}

export default App;
