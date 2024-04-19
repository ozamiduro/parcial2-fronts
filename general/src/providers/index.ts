import { Dispatch, SetStateAction, createContext } from "react";
import type { Product } from "../entities/Product";

interface Cart {
  cart: Product[] | undefined;
  setCart: Dispatch<SetStateAction<Product[] | undefined>>;
}

export const CartContext = createContext<Cart>({
  cart: undefined,
  setCart: () => {},
});
