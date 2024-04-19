import React, { PropsWithChildren, useState } from "react";
import { Product } from "../entities/Product";
import { CartContext } from ".";

const CartProvider = ({ children }: PropsWithChildren) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
