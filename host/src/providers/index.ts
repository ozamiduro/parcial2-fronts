import { Dispatch, SetStateAction, createContext } from "react";
import type { User } from "../entities/User";
import type { Product } from "../entities/Product";

interface Auth {
  auth: User | undefined;
  setAuth: Dispatch<SetStateAction<User | undefined>>;
}

export const AuthContext = createContext<Auth>({
  auth: undefined,
  setAuth: () => {},
});

interface Cart {
  cart: Product[];
  setCart: Dispatch<SetStateAction<Product[]>>;
}

export const CartContext = createContext<Cart>({
  cart: [],
  setCart: () => {},
});
