import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { WishlistContext } from "../../context/WishlistContext";
function Header() {
  const { basket } = useContext(BasketContext);
  const { wishlist } = useContext(WishlistContext);
  return (
    <>
      <header id="header">
        <div className="header_content">
          <div className="header_container">
            <nav>
              <Link to={""} className="nav-img">
                <img
                  src="https://preview.colorlib.com/theme/eiser/img/logo.png.webp"
                  alt=""
                />
              </Link>
              <div className="nav-icon">
                <Link to={"/wishlist"}>
                  <i class="fa-regular fa-heart">
                    <sup>{wishlist.length ? wishlist.length : ""}</sup>
                  </i>
                </Link>
                <Link to={"/basket"}>
                  <i class="fa-solid fa-cart-shopping">
                    <sup>{basket.length ? basket.length : ""}</sup>
                  </i>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
