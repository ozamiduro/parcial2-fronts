import axios from "axios";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

export const getUserProfile = async (token: string) => {
  return await axios.get(`${baseUrl}/products`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllPurchases = async (token: string) => {
  return await axios.get(`${baseUrl}/sales`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
