import React, { useState } from "react";
import drink from "../drink.svg";
import { Link } from "react-router-dom";
import AppNavLink from "../ui/AppNavLink";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const hide = open ? "" : "hidden";
  return (
    <nav className="w-full shadow-xl">
      <div className="flex items-center justify-between flex-wrap p-6 w-10/12 mx-auto">
        <Link
          to="/"
          className="flex items-center flex-shrink-0 text-white mr-6"
        >
          <img src={drink} alt="cocktail db logo" className="h-16 w-16" />

          <span className="font-semibold text-xl tracking-tight text-indigo-600">
            Cocktails
          </span>
        </Link>
        <div className="block lg:hidden">
          <button
            className={`flex items-center px-3 py-2 border rounded ${
              open
                ? "text-white bg-indigo-600"
                : "text-indigo-600 border-indigo-400"
            }  hover:text-white hover:bg-indigo-600 
               `}
            onClick={() => setOpen(!open)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end ${hide}`}
        >
          <AppNavLink name="Home" destination="/" />
          <AppNavLink name="About" destination="about" />
        </div>
      </div>
    </nav>
  );
}
