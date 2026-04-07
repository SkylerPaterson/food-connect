import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RestaurantDashboard from './pages/RestaurantDashboard';
import FoodBankDashboard from './pages/FoodBankDashboard';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<RestaurantDashboard />} />
        <Route path="/foodbank" element={<FoodBankDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;