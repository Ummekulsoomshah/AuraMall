import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './containers/Header';
import Bag from './containers/Bag';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import Footer from './containers/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/bag" element={<Bag/>} />
        <Route path="*" element={<div>404 Not Found!</div>} />
      </Routes>
      <Footer/>
    </Router>
  );
}