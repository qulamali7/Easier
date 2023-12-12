import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { BasketContext } from "../../context/BasketContext";
import "./index.scss";
const Wishlist = () => {
  const { wishlist, AddWishlist, RemoveWishlist } = useContext(WishlistContext);
  const { addBasket } = useContext(BasketContext);
  return (
    <>
      {wishlist.length ? (
        <div className="wishlist_cards">
          {wishlist.map((x) => (
            <div className="products_card" key={x.id}>
              <div className="products_card-img">
                <img src={x.image} alt="" />
                <div className="products_card-img_icons">
                  <div className="products_card-img_icon">
                    <Link to={`/detail/${x.id}`}>
                      <i class="fa-regular fa-eye"></i>
                    </Link>
                    <i
                      class="fa-solid fa-cart-shopping"
                      onClick={() => {
                        addBasket(x);
                      }}
                    ></i>
                    <i
                      class="fa-solid fa-heart"
                      onClick={() => {
                        AddWishlist(x);
                      }}
                    ></i>
                  </div>
                </div>
              </div>
              <div className="products_card_text">
                <h4>{x.title}</h4>
                <div className="products_card_text_price">
                  <p>{x.price}</p>
                  <span>{x.rating?.rate}</span>
                </div>
                <div className="buttons">
                  <button onClick={() => RemoveWishlist(x.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1>Wishlist </h1>
      )}
    </>
  );
};

export default Wishlist;
