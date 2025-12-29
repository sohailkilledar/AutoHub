import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeItem } from "../cartSlice.jsx";
import { useNavigate } from "react-router-dom";
import "./CartPage.css";

function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="cart-page-wrapper">
      <div className="cart-header">
        <h1>YOUR COLLECTION</h1>
        <p>{totalQuantity} Vehicles selected</p>
      </div>

      {totalQuantity === 0 ? (
        <div className="empty-cart">
          <p>The garage is empty.</p>
          <button onClick={() => navigate("/products")}>BROWSE CARS</button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="items-list">
            {Object.values(cartItems).map((item) => (
              <div key={item.product.id} className="cart-item-row">
                <img src={item.product.image} alt={item.product.name} className="cart-thumb" />
                <div className="item-details">
                  <h3>{item.product.name}</h3>
                  <p>${item.product.price.toLocaleString()}</p>
                </div>
                <div className="qty-controls">
                  <button onClick={() => dispatch(decrease(item.product.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increase(item.product.id))}>+</button>
                </div>
                <button className="del-btn" onClick={() => dispatch(removeItem(item.product.id))}>×</button>
              </div>
            ))}
          </div>

          <div className="cart-summary-card">
            <h2>ORDER SUMMARY</h2>
            <div className="summary-line">
              <span>Subtotal</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-line total">
              <span>Grand Total</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <button className="checkout-btn" onClick={() => alert("Redirecting to Secure Payment...")}>
              PROCEED TO CHECKOUT
            </button>
            <button className="continue-btn" onClick={() => navigate("/products")}>
              BACK TO SHOWROOM
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;