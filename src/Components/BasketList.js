import React from "react";
import "./BacketList.css";
import BasketItem from "./BasketItem";

function BasketList(props) {
  const { order = [], handleBacketShow, deleteOrderItem } = props;

  const totalPrice = order.reduce((sum, price) => {
    return sum + price.price;
  }, 0);

  return (
    <div className="bsk">
      <div className="basket">
      <div className="basket__header">
        <h2 className="bakset__title">Basket</h2>
        <span className="basket__close" onClick={handleBacketShow}>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>

      <div className="basket__body">
        {order.length ? (
          order.map((item) => (
            <BasketItem
              key={item.id}
              {...item}
              deleteOrderItem={deleteOrderItem}
            />
          ))
        ) : (
          <h3>Nothing here</h3>
        )}
      </div>

      <div className="basket__footer">
        <div className="basket__total">
          Total Price : {totalPrice} <b>$</b>
        </div>
      </div>
    </div>
    </div>
  );
}

export default BasketList;
