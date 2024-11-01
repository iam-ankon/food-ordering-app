import React from 'react';
// import './CartPage.css';

const CartPage = () => {
  return (
    <div className="cart-container">
      <div className="order-form">
        <h2>Place Order</h2>
        <p>
          Already a customer? <a href="/login">Click here to sign in.</a>
        </p>
        <form>
          <label>Name</label>
          <input type="text" placeholder="Full Name" />
          
          <label>Phone</label>
          <div className="phone-input">
            <span>+88</span>
            <input type="text" placeholder="Your mobile number" />
          </div>

          <label>Email</label>
          <input type="email" placeholder="Your email address" />

          <label>Address</label>
          <input type="text" placeholder="Your full address including post code" />

          <label>Shipping Option</label>
          <select>
            <option>Select Shipping Option</option>
            <option>Standard</option>
            <option>Express</option>
          </select>

          <label>Note</label>
          <textarea placeholder="Any additional instructions"></textarea>

          <h3>Payment Method</h3>
          <div className="payment-options">
            <label>
              <input type="radio" name="payment" value="card" /> Pay with Card
            </label>
            <label>
              <input type="radio" name="payment" value="bkash" /> Pay with Bkash
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit Order</button>
        </form>
      </div>

      <div className="cart-panel">
        <h2>Your Cart <span className="cart-count">3</span></h2>
        <div className="cart-item">
          <img src="https://via.placeholder.com/50" alt="food item" />
          <div className="item-details">
            <p><strong>INSTANT MENU 001</strong></p>
            <p>insta001</p>
            <p>৳350</p>
          </div>
          <div className="quantity-control">
            <button>-</button>
            <input type="text" value="1" readOnly />
            <button>+</button>
          </div>
          <button className="remove-btn">Remove</button>
        </div>

        <div className="cart-summary">
          <p>Cart Total: ৳350</p>
          <p>Shipping Charge: ৳0</p>
          <p><strong>Total: ৳350</strong></p>
        </div>

        <div className="coupon">
          <a href="/coupon">Have Coupon?</a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
