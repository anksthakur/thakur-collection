import React from 'react';
import { BrowserRouter as Router , Routes , Route, useLocation} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import AboutUs from './page/AboutUs';
import Shop from './page/Shop';
import Admin from './page/Admin';
import ContactUs from './page/ContactUs';
import Home from './page/Home';
import Footer from './components/Footer';
import Product from './page/Product';

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
      {currentPath === "/admin" ? "" :
        <>
          <Navbar currentPath={currentPath} />
        </>
      }
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route exact path="/product" element={<h1>Not found</h1>} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      {currentPath === "/admin" ? "" :
        <Footer />
      }
    </>
  );
}

export default App;
