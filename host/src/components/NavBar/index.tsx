import React, { useContext } from "react";
import { Navbar as NV } from "flowbite-react";
import Icons from "../Icons";

import { Anchor } from "../Anchor";
import { Popover } from "../Popover";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers";

import "./styles.scss";

const PopoverContent = () => {
  return (
    <div className="flex flex-col gap-3 max-w-[120px] text-center p-3">
      <Anchor text={"Iniciar sesión"} link={"login"} styles={"border-white"} />
    </div>
  );
};

const NavBar = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <NV>
        <NavLink
          to="/"
          className={"items-center text-white flex flex-row gap-3"}
        >
          <Icons icon={"market"} color={"white"} />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Parcial 2
          </span>
        </NavLink>
        <NV.Toggle />
        <NV.Collapse className="cc-collapse">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/addproduct">Add</NavLink>
          <NavLink to="/cart">
            <Icons icon={"cart"} color={"white"} />
          </NavLink>
          <div className="cursor-pointer">
            <Popover content={<PopoverContent />}>
              <button>
                <Icons icon={"user"} color={"white"} />
              </button>
            </Popover>
          </div>
        </NV.Collapse>
      </NV>
    </>
  );
};

export { NavBar };
