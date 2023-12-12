import React from "react";
import "./index.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BasketContext } from "../../context/BasketContext";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
const Detail = () => {
  const { addBasket } = useContext(BasketContext);
  const { AddWishlist,checkAtWishList } = useContext(WishlistContext);
  let { id } = useParams();
  const [detail, setDetail] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch("https://fakestoreapi.com/products/" + id);
      const data = await res.json();
      setDetail(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
      <div className="detail_card">
        <div className="products_card">
          <div className="products_card-img">
            <img src={detail.image} alt="" />
            <div className="products_card-img_icons">
            <div className="products_card-img_icon">
              <i
                class="fa-solid fa-cart-shopping"
                onClick={() => {
                  addBasket(detail);
                }}
              ></i>
             <i
                class={`fa-solid fa-heart ${checkAtWishList({detail}) ? "red" :""}`} 
                onClick={() => {
                  AddWishlist(detail);
                }}
              ></i>
            </div>
          </div>
          </div>
          <div className="products_card_text">
            <h4>{detail.title}</h4>
            <div className="products_card_text_price">
              <p>{detail.price}</p>
              <span>{detail.rating?.rate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
