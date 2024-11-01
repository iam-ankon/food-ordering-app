// src/pages/Home.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Choose Your Food Plan</h1>
      <div className="plan-buttons">
        <Link to="/products?plan=standard" className="plan-button">Standard Plan</Link>
        <Link to="/products?plan=diet" className="plan-button">Diet Plan</Link>
        <Link to="/products?plan=premium" className="plan-button">Premium Plan</Link>
        <Link to="/products?plan=party" className="plan-button">Party Plan</Link>
      </div>
    </div>
  );
}

export default Home;
