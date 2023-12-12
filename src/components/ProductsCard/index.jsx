import React from "react";
import "./index.scss";
import { BasketContext } from "../../context/BasketContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
const ProductsCard = ({ x, id, img, name, rate, price }) => {
  const { addBasket, checkAtBasket } = useContext(BasketContext);
  const { AddWishlist, checkAtWishList } = useContext(WishlistContext);
  return (
    <>
      <div className="products_card">
        <div className="products_card-img">
          <img src={img} alt="" />
          <div className="products_card-img_icons">
            <div className="products_card-img_icon">
              <Link to={`/detail/${id}`}>
                <i class="fa-regular fa-eye"></i>
              </Link>
              <i
                class={`fa-solid fa-cart-shopping ${
                  checkAtBasket({ x, id, img, name, rate, price })
                    ? "additem"
                    : ""
                }`}
                onClick={() => {
                  addBasket(x);
                }}
              ></i>
              <i
                class={`fa-solid fa-heart ${
                  checkAtWishList({ x, id, img, name, rate, price })
                    ? "wishitem"
                    : ""
                }`}
                onClick={() => {
                  AddWishlist(x);
                }}
              ></i>
            </div>
          </div>
        </div>
        <div className="products_card_text">
          <h4>{name}</h4>
          <div className="products_card_text_price">
            <p>{price}</p>
            <span>{rate}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCard;
