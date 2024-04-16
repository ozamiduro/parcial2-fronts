import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input } from "../Input";
import { Button } from "../Button";
import { Anchor } from "../Anchor";

const LoginForm = () => {
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={"min-w-md max-w-xl m-[auto] text-center"}>
      <h1
        className={
          "text-3xl text-center font-mono font-medium my-10 border-t-2 border-b-2 border-gray-900"
        }
      >
        Iniciar sesión
      </h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({}) => {
          return (
            <Form>
              <Input
                label={"Correo electrónico"}
                name={"email"}
                type={"email"}
                icon={"envelope"}
              />
              <Input
                label={"Contraseña"}
                name={"password"}
                type={"password"}
                icon={"lock"}
              />
              <Button text={"Iniciar sesión"} type={"submit"} />
              <div className={"border-t-2 border-gray-900 w-full mb-2 mt-2"} />
              <Anchor text={"Crear una cuenta"} link={"/register"} />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export { LoginForm };
