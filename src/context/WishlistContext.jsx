import React, { createContext, useState } from "react";
import useLocalStorage from "../hook/useLocalStorage";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useLocalStorage("wishlist", []);
  function AddWishlist(item) {
    if (wishlist.find((x) => x.id === item.id)) {
      setWishlist(wishlist.filter((x) => x.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  }
  function RemoveWishlist(id) {
    setWishlist(wishlist.filter((x) => x.id !== id));
  }
  function checkAtWishList(item) {
    if (wishlist.find((x) => x.id === item.id)) {
      return true;
    }
    return false;
  }

  const data = {
    wishlist,
    setWishlist,
    AddWishlist,
    RemoveWishlist,
    checkAtWishList,
  };
  return (
    <WishlistContext.Provider value={data}>{children}</WishlistContext.Provider>
  );
}

export default WishlistProvider;
