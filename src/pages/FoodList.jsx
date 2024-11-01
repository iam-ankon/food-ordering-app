import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const sampleFoods = {
  "Standard Plan": ["Burger", "Pizza", "Sandwich"],
  "Diet Plan": ["Salad", "Smoothie", "Grilled Chicken"],
  "Premium Plan": ["Steak", "Sushi", "Pasta"],
  "Party Plan": ["Party Platter", "Mini Burgers", "Cocktails"]
};

function FoodList() {
  const { planName } = useParams();
  const foods = sampleFoods[planName] || [];
  const navigate = useNavigate();

  return (
    <div>
      <h1>{planName} - Food Items</h1>
      <div className="food-grid">
        {foods.map((food, index) => (
          <div key={index} className="food-card" onClick={() => navigate(`/product/${food}`)}>
            <h2>{food}</h2>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodList;
