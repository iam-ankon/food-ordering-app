import React from 'react';
import { Link } from 'react-router-dom';
// import './index.css';

function LoginPage() {
  return (
    <div className="container">
      <h2>Login to Your Account</h2>
      <form className="login-form">
        <input type="text" className="cart-input" placeholder="Email or Phone Number" required />
        <input type="password" className="cart-input" placeholder="Password" required />
        <button type="submit" className="cart-submit-button">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}

export default LoginPage;
