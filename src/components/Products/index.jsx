import React from "react";
import ProductsCards from "../ProductsCards";
import "./index.scss";
const Products = () => {
  return (
    <>
      <section id="products">
        <div className="products_container">
          <div className="products_title">
            <div className="products_title_content">
              <h2>PRODUCTS</h2>
              <p>Bring called seed first of third give itself now ment</p>
            </div>
          </div>
          <ProductsCards />
        </div>
      </section>
    </>
  );
};

export default Products;
