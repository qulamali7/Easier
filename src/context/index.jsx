import React from "react";
import BasketProvider from "./BasketContext";
import WishlistProvider from "./WishlistContext";

function MainProvider({ children }) {
  return (
    <WishlistProvider>
      <BasketProvider>{children}</BasketProvider>
    </WishlistProvider>
  );
}

export default MainProvider;
