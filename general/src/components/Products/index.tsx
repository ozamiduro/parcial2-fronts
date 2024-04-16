import React from "react";
import { ECommerceCard } from "../ECommerceCard";
import { products } from "./data";

const Products = () => {
  return (
    <div className={"w-full flex flex-nowrap gap-4"}>
      {products.map((product) => {
        return (
          <ECommerceCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Products;
