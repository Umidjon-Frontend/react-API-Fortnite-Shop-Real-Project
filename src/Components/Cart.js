import React from "react";
import "./Cart.css";

function Cart(props) {
  const { orderLength = 0, handleBacketShow } = props;
  return (
    <div className="cart" onClick={handleBacketShow}>
      <i className="fa-solid fa-cart-shopping"></i>
      <span className="cart__circle">{orderLength}</span>
    </div>
  );
}

export default Cart;
