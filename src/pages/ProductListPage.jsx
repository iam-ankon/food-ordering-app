import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ProductListPage() {
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

  if (!plan) {
    return <p>Please select a valid plan.</p>;
  }

  return (
    <div className="container">
      <h2>{plan.charAt(0).toUpperCase() + plan.slice(1)} Plan Foods</h2>
      <div className="food-list">
        {foods.map((food, index) => (
          <Link 
            key={index} 
            to={`/product/${encodeURIComponent(food)}`}  // Pass food in URL path
            className="food-item"
          >
            {food}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductListPage;
