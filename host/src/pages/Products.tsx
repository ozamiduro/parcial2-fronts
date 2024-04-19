import React from "react";

import Products from "general/Products";
import ErrorBoundary from "../components/Error";
import useCartStore from "../hooks/useCartStore";

const ProductsPage = () => {
  const { addProduct, clearCart } = useCartStore();
  return (
    <ErrorBoundary>
      <Products addProduct={addProduct} clearCart={clearCart} />
    </ErrorBoundary>
  );
};

export default ProductsPage;
