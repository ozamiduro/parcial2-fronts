import React, { CSSProperties } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  text: string;
  link: string;
  styles?: string;
  cssStyles?: CSSProperties;
}

const Anchor = ({ text, link, styles, cssStyles }: Props) => {
  return (
    <NavLink
      to={link}
      className={`w-full border-b-2 border-gray-900 ${styles}`}
      style={cssStyles}
    >
      {text}
    </NavLink>
  );
};

export { Anchor };
