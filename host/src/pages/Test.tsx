import { useContext } from "react";
import { CartContext } from "../providers";
import React from "react";

const Test = () => {
  const { cart, setCart } = useContext(CartContext);

  console.log(cart);

  return (
    <div>
      <h1>Test</h1>
      <button
        onClick={() =>
          setCart(
            cart.concat([
              { id: 32, imageUrl: "", name: "x", price: 32434, quantity: 1 },
            ])
          )
        }
      >
        Press
      </button>
    </div>
  );
};

export default Test;
