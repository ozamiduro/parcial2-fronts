import React from "react";

interface Props {
  text: string;
  link: string;
  styles?: string;
}

const Anchor = ({ text, link, styles }: Props) => {
  return (
    <a href={link} className={`w-full border-b-2 border-gray-900 ${styles}`}>
      {text}
    </a>
  );
};

export { Anchor };
