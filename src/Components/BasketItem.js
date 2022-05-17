import React from "react";
import "./BasketItem.css";

function BasketItem(props) {
  const {id, name, description, price, full_background, deleteOrderItem } = props;
  return (
    <div className="backet__item">
      <img src={full_background} alt={name} className="basket__img" />
      <div className="basket__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <hr />
      <div className="backet__action">
        <button className="backet__btn" onClick={()=>deleteOrderItem(id)}>
          <i class="fa-solid fa-trash-can"></i>
        </button>
        <span>{price}$</span>
      </div>
    </div>
  );
}

export default BasketItem;
