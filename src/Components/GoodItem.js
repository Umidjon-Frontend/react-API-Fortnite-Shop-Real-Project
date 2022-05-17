import React from "react";
import "./GoodItem.css";

function GoodItem(props) {
  const { id, name, description, price, full_background, addToBasket } = props;
  return (
    <div className="goods__item">
      <img className="goods__img" src={full_background} alt={name} />
      <div className="goods__content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <hr />
      <div className="goods__action">
        <button
          className="goods__btn"
          onClick={() =>
            addToBasket({ id, name, description, price, full_background })
          }
        >
          Buy
        </button>
        <span>{price}$</span>
      </div>
    </div>
  );
}

export default GoodItem;
