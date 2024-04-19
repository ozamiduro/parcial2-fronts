import React from "react";
import { IconsProps } from "./type";

const Close = ({ color, style }: IconsProps) => {
  return (
    <svg
      className={style}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      style={{ color: color }}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18 17.94 6M18 18 6.06 6"
      />
    </svg>
  );
};

export { Close };
