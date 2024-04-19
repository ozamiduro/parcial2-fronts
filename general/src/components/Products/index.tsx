import React from "react";
import { ECommerceCard } from "../ECommerceCard";
import { products } from "./data";

const Products = (props: any) => {
  return (
    <div className={"w-full flex flex-nowrap gap-4"}>
      {products.map((product) => {
        return (
          <ECommerceCard
            key={product.id}
            props={{
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.imageUrl,
              quantity: 0,
            }}
            onClick={() =>
              props.addProduct({
                id: product.id,
                name: product.name,
                price: product.price,
                imageUrl: product.imageUrl,
                quantity: 1,
              })
            }
          />
        );
      })}
    </div>
  );
};

export default Products;
