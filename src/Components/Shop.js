import React, { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import Cart from "./Cart";
import GoodList from "./GoodList";
import Loader from "./Loader";
import BasketList from "./BasketList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Shop.css";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  const [isBacketShow, setIsBacketShow] = useState(false);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(true);
      });
  }, []);

  const addToBasket = (item) => {
    const newItem = {
      ...item,
    };
    setOrder([...order, newItem]);
    toast.success("Add basket successfully")
  };

  const handleBacketShow = () => {
    setIsBacketShow(!isBacketShow);
  };

  const deleteOrderItem = (id) => {
    const newOrder = order.filter((item) => {
      return item.id !== id;
    });
    setOrder(newOrder);
    toast.error("Remove order successfully")
  };

  return (
    <div className="shop">
      <div className="container">
        <ToastContainer />
        <Cart
          orderLength={order.length}
          order={order}
          handleBacketShow={handleBacketShow}
        />
        {!loading ? (
          <Loader />
        ) : (
          <GoodList goods={goods} addToBasket={addToBasket} />
        )}
        {isBacketShow && (
          <BasketList
            order={order}
            handleBacketShow={handleBacketShow}
            deleteOrderItem={deleteOrderItem}
          />
        )}
      </div>
    </div>
  );
}

export default Shop;
