import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const addCookies = (name: string, data: any) => {
  data.creationDate = new Date();
  cookies.set(name, data);
};

export const getCookies = (name: string) => {
  return cookies.get(name);
};

export const removeCookies = (name: string) => {
  cookies.remove(name);
};
