import React, { useEffect, useState } from "react";
import { ECommerceCard } from "../ECommerceCard";
import { getProducts } from "../../service/product";
import { Product } from "../../entities/Product";

const Products = (props: any) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const unSub = async () => {
      const { data } = await getProducts(props.auth);
      const prods = data.map((product: any) => {
        return {
          id: product._id,
          ...product,
        };
      });
      setProducts(prods);
    };

    unSub();
  }, []);

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
