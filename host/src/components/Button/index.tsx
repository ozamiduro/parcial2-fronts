import React from "react";

interface Props {
  text: string;
  type?: "button" | "reset" | "submit";
  onClick?: () => void;
  styles?: string;
}

const Button = ({ text, type = "button", onClick, styles }: Props) => {
  return (
    <button
      type={type}
      className={`${styles} text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
