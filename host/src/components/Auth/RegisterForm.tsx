import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Input } from "../Input";
import Button from "../Button";
import { Anchor } from "../Anchor";
import { register } from "../../service/auth";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    name: Yup.string().required("Este campo es obligatorio"),
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });

  const onSubmit = async (info: any) => {
    const { status } = await register(info);
    if (status === 201) {
      navigate("/login");
    }
  };

  return (
    <div
      className={"min-w-md max-w-xl bg-white rounded m-[auto] text-center"}
      style={{
        padding: 20,
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.75)",
      }}
    >
      <h1
        className={
          "text-3xl text-center font-mono font-medium my-10 border-t-2 border-b-2 border-gray-900"
        }
      >
        Registrese
      </h1>
      <Formik
        initialValues={{
          name: "",
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
                label={"Nombre de usuario"}
                name={"name"}
                type={"text"}
                icon={"user"}
              />
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
              <Button text={"Registrese"} type={"submit"} />
            </Form>
          );
        }}
      </Formik>
      <div className={"border-t-2 border-gray-900 w-full mb-2 mt-5"} />
      <div className={"m-6"}>
        <Anchor text={"¿Ya tienes cuenta? Inicie sesión"} link={"/login"} />
      </div>
    </div>
  );
};

export { RegisterForm };
