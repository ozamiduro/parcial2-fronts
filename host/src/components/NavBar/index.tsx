import React from "react";
import { Navbar as NV } from "flowbite-react";
import { Icon } from "../Icons";

const NavBar = () => {
  return (
    <>
      <NV>
        <NV.Brand href="/" className="text-white flex flex-row gap-3">
          <Icon icon={"market"} color={"white"} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Parcial 2
          </span>
        </NV.Brand>
        <NV.Toggle />
        <NV.Collapse>
          <NV.Link href="/" active>
            Home
          </NV.Link>
          <NV.Link href="/addproduct" active>
            Add
          </NV.Link>
          <NV.Link href="#">
            <Icon icon={"cart"} color={"white"} />
          </NV.Link>
          <NV.Link href="login">
            <Icon icon={"user"} color={"white"} />
          </NV.Link>
        </NV.Collapse>
      </NV>
    </>
  );
};

export { NavBar };
