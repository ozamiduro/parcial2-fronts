import React, { useContext } from "react";

import Products from "general/Products";
import ErrorBoundary from "../components/Error";
import useCartStore from "../hooks/useCartStore";
import { AuthContext } from "../providers";

const ProductsPage = () => {
  const { auth } = useContext(AuthContext);
  const { addProduct, clearCart } = useCartStore();
  return (
    <ErrorBoundary>
      <Products
        addProduct={addProduct}
        clearCart={clearCart}
        auth={auth?.token}
      />
    </ErrorBoundary>
  );
};

export default ProductsPage;
