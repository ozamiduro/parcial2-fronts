import React, { useContext } from "react";

import AddProduct from "admin/AddProduct";
import { AuthContext } from "../providers";

const AddProductPage = () => {
  const { auth } = useContext(AuthContext);
  console.log("ACA==============", auth);
  return <AddProduct token={auth?.token} />;
};

export default AddProductPage;
