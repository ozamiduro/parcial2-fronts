import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input } from "../Input";
import { NavLink } from "react-router-dom";

const AddProduct = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
    price: Yup.number().required("Este campo es obligatorio"),
    imageUrl: Yup.string().required("Este campo es obligatorio"),
    quantity: Yup.number().required("Este campo es obligatorio"),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <div
        className={
          "min-w-md max-w-xl m-[auto] text-center rounded border bg-white p-4"
        }
      >
        <div className={"flex flex-row items-center justify-between"}>
          <h1 className="font-bold font-mono">
            Ingresa la información para un nuevo producto
          </h1>
          <NavLink
            to="/"
            className={
              "p-1.5 text-sm font-bold inline-flex items-center bg-red-400 text-red-800 flex flex-row justify-center focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg text-center"
            }
          >
            <svg
              className="w-6 h-6 text-red-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
            Cancelar
          </NavLink>
        </div>
        <div className="border border-gray-900" style={{ margin: "10px 0" }} />
        <Formik
          initialValues={{
            name: "",
            price: "",
            imageUrl: "",
            quantity: "",
          }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => {
            return (
              <Form>
                <Input
                  label={"Nombre del producto"}
                  name={"name"}
                  type={"text"}
                />
                <Input
                  label={"Precio unitario"}
                  name={"price"}
                  type={"price"}
                  value={values.price}
                />
                <Input
                  label={"URL de la imagen"}
                  name={"imageUrl"}
                  type={"image"}
                  value={values.imageUrl}
                />
                <Input
                  label={"Cantidad en stock"}
                  name={"quantity"}
                  type={"number"}
                />
                <button
                  type={"submit"}
                  className={`text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
                >
                  {"Agregar producto"}
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </>
  );
};

export default AddProduct;
