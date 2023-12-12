import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const BasketContext = createContext();

function BasketProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket", []);

  function addBasket(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (index === -1) {
      setBasket([...basket, { ...item, count: 1}]);
      return;
    }
    basket[index].count++;
    setBasket([...basket]);
  }
  function increaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    basket[index].count++;
    setBasket([...basket]);
  }
  function decreaseCount(item) {
    const index = basket.findIndex((x) => x.id === item.id);
    if (basket[index].count === 1) {
      return;
    }
    basket[index].count--;
    setBasket([...basket]);
  }
  function removeItem(item) {
    console.log(item);
    setBasket(basket.filter((x) => x.id !== item.id));
  }
  function checkAtBasket(item) {
    if (basket.find((x) => x.id === item.id)) {
        return true
      }
      return false
  }
  function getTotalPrice() {
    return basket.reduce((sum,basket)=>sum+basket.count*basket.price,0).tofixed(1)
  }

  const data = {
    basket,
    addBasket,
    increaseCount,
    decreaseCount,
    removeItem,
    checkAtBasket
  };

  return (
    <BasketContext.Provider value={data}>{children}</BasketContext.Provider>
  );
}

export default BasketProvider;
