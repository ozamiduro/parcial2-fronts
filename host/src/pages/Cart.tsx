import React from "react";
import Cart from "general/Cart";
import useCartStore from "../hooks/useCartStore";

const CartPage = () => {
  const { getCartProducts, incrementQuantity, decrementQuantity, clearCart } =
    useCartStore();

  return (
    <Cart
      getCartProducts={getCartProducts}
      incrementQuantity={incrementQuantity}
      decrementQuantity={decrementQuantity}
      clearCart={clearCart}
    />
  );
};

export default CartPage;
