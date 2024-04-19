import { Popover as POP, PopoverProps } from "flowbite-react";
import React from "react";

interface Props {
  children: React.ReactNode;
  content: any;
  placement?: PopoverProps["placement"];
}

const Popover = ({ content, children, placement = "bottom" }: Props) => {
  return (
    <POP content={content} placement={placement}>
      {children}
    </POP>
  );
};

export { Popover };
