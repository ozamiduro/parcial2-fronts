import { useContext, useEffect } from "react";
import { CartContext } from "../providers";
import { Product } from "../entities/Product";

export default function useCartStore() {
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    console.log(cart);
  }, [cart, setCart]);

  const incrementQuantity = (id: string) => {
    const result = cart.map((p) =>
      p.id === id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCart(result);
  };

  const addProduct = (product: Product) => {
    const result = cart?.some((p) => p.id === product.id)
      ? cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      : cart?.concat(product);
    setCart(result);
  };

  const decrementQuantity = (id: string) => {
    const rf = cart.map((p) =>
      p.id === id ? { ...p, quantity: Math.max(p.quantity - 1, 0) } : p
    );

    const result = rf.filter((p) => p.quantity > 0);

    setCart(result);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartProducts = () => cart;

  return {
    getCartProducts,
    addProduct,
    incrementQuantity,
    decrementQuantity,
    clearCart,
  };
}
