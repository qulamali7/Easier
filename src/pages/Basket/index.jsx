import React, { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";
import { Link } from "react-router-dom";
function Basket() {
  const { basket, increaseCount, decreaseCount, removeItem } =
    useContext(BasketContext);
  return (
    <>
      {basket.length ? (
        <div className="basket_cards">
          <div></div>
          {basket.map((x) => (
            <div className="products_card" key={x.id}>
              <div className="products_card-img">
                <img src={x.image} alt="" />
                <div className="products_card-img_icon">
                  <Link to={`/detail/${x.id}`}>
                    <i class="fa-regular fa-eye"></i>
                  </Link>
                  <i class="fa-solid fa-cart-shopping"></i>
                  <i class="fa-solid fa-heart"></i>
                </div>
              </div>
              <div className="products_card_text">
                <h4>{x.title}</h4>
                <div className="products_card_text_price">
                  <p>{x.price}</p>
                  <span>{x.rating?.rate}</span>
                </div>
                <div className="buttons">
                  <button
                    onClick={() => {
                      increaseCount(x);
                    }}
                  >
                    +
                  </button>
                  <div className="price">Count:{x.count}</div>
                  <button
                    onClick={() => {
                      decreaseCount(x);
                    }}
                  >
                    -
                  </button>
                  <button onClick={() => removeItem(x)}>Delete</button>
                </div>
                <div className="price">
                  Price:{Math.floor(x.price * x.count)}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Basket bosdur</h1>
      )}
    </>
  );
}

export default Basket;
