import React from "react";
import { Cart } from "./Cart";
import { Market } from "./Market";
import { User } from "./User";
import { Lock } from "./Lock";
import { Envelope } from "./Envelope";

const listIcons = {
  cart: Cart,
  envelope: Envelope,
  lock: Lock,
  market: Market,
  user: User,
};

export type IconNames = keyof typeof listIcons;

interface Props {
  color?: string;
  size?: number;
  icon: IconNames;
}

const Icon = ({ color = "black", size = 6, icon }: Props) => {
  const IconRender = listIcons[icon];
  const stylesFW = `w-${size} h-${size}`;
  return (
    <>
      <IconRender style={stylesFW} color={color} />
    </>
  );
};

export { Icon };
