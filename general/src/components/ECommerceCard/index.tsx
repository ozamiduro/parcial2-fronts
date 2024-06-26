import React from "react";
import { Card } from "flowbite-react";
import { Product } from "../../entities/Product";
import { NavLink } from "react-router-dom";

interface Props {
  props: Product;
  onClick: () => void;
}

const ECommerceCard = ({ props, onClick }: Props) => {
  const { name, imageUrl, id, price } = props;
  return (
    <Card
      className="max-w-xs w-[16rem]"
      imgAlt={`${id}-${name}`}
      imgSrc={imageUrl}
    >
      <NavLink to="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
      </NavLink>
      <div className="flex items-center justify-between">
        <span className="text-medium font-bold bg-white text-black rounded-lg py-1 px-2 dark:text-gray-900 dark:black">
          {new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "COP",
          }).format(price)}
        </span>
        <button
          onClick={onClick}
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Add to cart
        </button>
      </div>
    </Card>
  );
};
export { ECommerceCard };
