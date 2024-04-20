import React, { useContext } from "react";
import { Button, Navbar as NV } from "flowbite-react";
import Icons from "../Icons";

import { Anchor } from "../Anchor";
import { Popover } from "../Popover";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../providers";

import "./styles.scss";
import { User } from "../../entities/User";
import { removeCookies } from "../../utils/Cookies";

const PopoverContent = (auth: User | undefined, closeSession: () => void) => {
  return (
    <div className="flex flex-col gap-3 max-w-[120px] text-center p-3">
      {auth ? (
        <>
          <Anchor
            text={auth.name}
            link={"/profile"}
            styles={"border-white font-mono font-bold"}
          />
          <Button onClick={() => closeSession()}>{"Cerrar sesión"}</Button>
        </>
      ) : (
        <Anchor
          text={"Iniciar sesión"}
          link={"login"}
          styles={"border-white"}
        />
      )}
    </div>
  );
};

const NavBar = () => {
  const { auth, setAuth } = useContext(AuthContext);

  const closeSession = () => {
    setAuth(undefined);
    removeCookies("auth");
  };

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
          {auth?.role === "admin" && <NavLink to="/addproduct">Add</NavLink>}
          {auth && (
            <NavLink to="/cart">
              <Icons icon={"cart"} color={"white"} />
            </NavLink>
          )}

          <div className="cursor-pointer">
            <Popover content={PopoverContent(auth, closeSession)}>
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
