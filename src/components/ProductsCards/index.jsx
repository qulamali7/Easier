import React from "react";
import ProductsCard from "../ProductsCard";
import "./index.scss";
import { useState, useEffect } from "react";
const ProductsCards = () => {
  const [data, setData] = useState([]);
  async function GetFetch() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    GetFetch();
  }, []);
  return (
    <>
      <div className="products_cards">
        {data.map((x) => (
          <ProductsCard
          x={x}
            id={x.id}
            img={x.image}
            name={x.title}
            rate={x.rating.rate}
            price={x.price}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsCards;
