import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import ScrollToTop from './components/ScrollToTop';
import ScrollEnhancements from './components/ScrollEnhancements';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollEnhancements />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
