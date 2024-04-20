import React, { useContext } from "react";
import Cart from "general/Cart";
import useCartStore from "../hooks/useCartStore";
import { AuthContext } from "../providers";

const CartPage = () => {
  const { auth } = useContext(AuthContext);
  const { getCartProducts, incrementQuantity, decrementQuantity, clearCart } =
    useCartStore();

  return (
    <Cart
      getCartProducts={getCartProducts}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      clearCart={clearCart}
      token={auth?.token}
    />
  );
};

export default CartPage;
