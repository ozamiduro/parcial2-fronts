import axios from "axios";
import { Product } from "../entities/Product";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

export const addProduct = async (product: Product, token: string) => {
  return await axios.post(`${baseUrl}/products`, product, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
