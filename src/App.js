import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstScreen from './Screen/FirstScreen';
import SecondScreen from './Screen/SecondScreen';
import ProductDetails from './Screen/ProductDetails';
import CartScreen from './Screen/CartScreen'; // Import CartScreen
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstScreen />} />
        <Route path="/second" element={<SecondScreen />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartScreen />} /> {/* Add route for CartScreen */}
      </Routes>
    </Router>
  );
}

export default App;
