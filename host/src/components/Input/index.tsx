import React from "react";
import { ErrorMessage, Field } from "formik";
import Icons, { IconNames } from "../Icons";

interface Props {
  name: string;
  type: string;
  icon: IconNames;
  label?: string;
  placeholder?: string;
  validation?: (value: any) => string | null;
  error?: string;
}

const Input = ({
  name,
  type = "text",
  label,
  icon = "user",
  placeholder,
  validation,
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
      <div className="flex">
        <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          <Icons icon={icon} color={"white"} />
        </span>
        <Field
          type={type}
          id={name}
          name={name}
          className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={placeholder}
          validate={validation}
        />
      </div>
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
