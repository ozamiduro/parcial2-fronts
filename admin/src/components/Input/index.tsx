import React from "react";
import { ErrorMessage, Field } from "formik";
import "./styles.scss";

interface Props {
  name: string;
  type: string;
  label?: string;
  placeholder?: string;
  validation?: (value: any) => string | null;
  error?: string;
  value?: string | number;
}

const Input = ({
  name,
  type = "text",
  label,
  placeholder,
  validation,
  value,
}: Props) => {
  return (
    <div className="max-w-sm mx-auto">
      <label
        htmlFor={name}
        style={{ borderBottomWidth: 2 }}
        className="block mb-2 text-lg font-medium border-gray-900 text-gray-900 font-mono"
      >
        {label}
      </label>
      <div className="flex relative">
        {type === "price" ? (
          <>
            <Field
              type={"number"}
              id={name}
              name={name}
              className="absolute opacity-0 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={placeholder}
              validate={validation}
            />
            <span className="text-left rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              {new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
              }).format(Number(value))}
            </span>
          </>
        ) : (
          <Field
            type={type === "image" ?? "text"}
            id={name}
            name={name}
            className="rounded-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
            validate={validation}
          />
        )}
      </div>
      {type === "image" && (
        <div className={"imageContainer"}>
          <img
            src={
              value
                ? value.toString()
                : "https://flowbite.com/docs/images/examples/image-1@2x.jpg"
            }
            alt={name}
            style={{ objectFit: "cover" }}
            className="h-full w-full"
          />
        </div>
      )}

      <div className="h-5 mt-2 mb-2">
        <ErrorMessage name={name}>
          {(msg: string) => (
            <div className="text-red-500 text-sm font-mono">{msg}</div>
          )}
        </ErrorMessage>
      </div>
    </div>
  );
};

export { Input };
