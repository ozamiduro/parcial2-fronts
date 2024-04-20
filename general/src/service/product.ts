import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

export const getProducts = async (token: string) => {
  return await axios.get(`${baseUrl}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const purchaseCart = async (
  cart: { productId: string; quantity: number },
  token: string
) => {
  console.log(cart);
  return await axios.post(`${baseUrl}/sales`, cart, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
