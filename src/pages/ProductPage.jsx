// src/pages/ProductPage.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';

// import './index.css';

function ProductPage() {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/cart');
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality here, such as adding to a cart state or context
    alert("Item added to cart!");
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get('plan');

  const foodItems = {
    standard: ["Food A", "Food B", "Food C"],
    diet: ["Food D", "Food E", "Food F"],
    premium: ["Food G", "Food H", "Food I"],
    party: ["Food J", "Food K", "Food L"],
  };

  const foods = foodItems[plan] || [];

  return (
    <div className="container">
      <h2>{foods}</h2>
      <p>This page contains the details of the selected food item.</p>

      <button onClick={handleBuyNow} className="cart-submit-button">Buy Now</button>
      <button onClick={handleAddToCart} className="add-to-cart-button">Add to Cart</button>

      <div className="product-description">
        <h3>Description</h3>
        <p>This is a detailed description of the food item, including ingredients, nutrition, etc.</p>
      </div>

      <div className="product-reviews">
        <h3>Reviews</h3>
        <p>Customer reviews will be displayed here.</p>
      </div>
    </div>
  );
}

export default ProductPage;
