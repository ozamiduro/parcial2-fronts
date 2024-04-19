declare module "host/hooks/useCartStore" {
  import { Product } from "./entities/Product";

  function useCartStore(): {
    getCartProducts: () => Product[];
    addProduct: (product: Product) => void;
    incrementQuantity: (id: number) => void;
    decrementQuantity: (id: number) => void;
  };

  export default useCartStore;
}

declare module "host/providers/Cart" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function CartProvider({ children }: Props): JSX.Element;
}

declare module "host/Button" {
  import React from "react";

  interface Props {
    text: string;
    type?: "button" | "reset" | "submit";
    onClick?: () => void;
    styles?: string;
  }

  export default function Button({
    text,
    type = "button",
    onClick,
    styles,
  }: Props): JSX.Element;
}

declare module "host/Icons" {
  import React from "react";

  interface Props {
    color?: string;
    size?: number;
    icon: IconNames;
  }

  export default function Icons({
    color = "black",
    size = 6,
    icon,
  }: Props): JSX.Element;
}
