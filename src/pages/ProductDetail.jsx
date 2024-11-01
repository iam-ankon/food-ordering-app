import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const addToCart = () => {
    alert(`${id} added to cart!`);
    // You can implement cart logic here (e.g., updating cart state)
  };

  const buyNow = () => {
    navigate('/cart');
  };

  return (
    <div>
      <h1>{id}</h1>
      <button onClick={buyNow}>Buy Now</button>
      <button onClick={addToCart}>Add to Cart</button>
      <div>
        <h3>Description</h3>
        <p>Details about the {id}...</p>
      </div>
      <div>
        <h3>Reviews</h3>
        <p>Customer reviews for {id}...</p>
      </div>
    </div>
  );
}

export default ProductDetail;
