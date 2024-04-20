import axios from "axios";
import { User } from "../entities/User";

const baseUrl = `${process.env.REACT_APP_BACKEND_URL}`;

export const login = async (auth: Pick<User, "email" | "password">) => {
  return await axios.post(`${baseUrl}/login`, auth, { withCredentials: true });
};

export const register = async (
  auth: Pick<User, "email" | "password" | "name">
) => {
  return await axios.post(`${baseUrl}/signup`, auth, {
    withCredentials: true,
  });
};
