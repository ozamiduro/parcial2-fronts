import { Form, Formik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import { Input } from "../Input";
import Button from "../Button";
import { Anchor } from "../Anchor";
import { login } from "../../service/auth";
import { AuthContext } from "../../providers";
import { jwtDecode } from "jwt-decode";
import type { User } from "../../entities/User";
import { addCookies } from "../../utils/Cookies";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });

  const onSubmit = async (info: any) => {
    const { data } = await login(info);
    const decoded: User = jwtDecode(data.token);
    const { email, name, role } = decoded;
    setAuth({ email, name, role, password: "", token: data.token });
    addCookies("auth", { email, name, role, password: "", token: data.token });
    navigate("/");
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
            </Form>
          );
        }}
      </Formik>
      <div className={"border-t-2 border-gray-900 w-full mb-2 mt-5"} />
      <div className={"m-10"}>
        <Anchor text={"Crear una cuenta"} link={"/register"} />
      </div>
    </div>
  );
};

export { LoginForm };
