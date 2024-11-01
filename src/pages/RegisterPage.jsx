// src/pages/RegisterPage.jsx
import React from 'react';
// import './index.css';

function RegisterPage() {
  return (
    <div className="container">
      <h2>Create an Account</h2>
      <form className="register-form">
        <input type="text" className="cart-input" placeholder="Name" required />
        <input type="email" className="cart-input" placeholder="Email" required />
        <input type="password" className="cart-input" placeholder="Password" required />
        <button type="submit" className="cart-submit-button">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
