import React from "react";
import { NavLink } from "react-router-dom";

export default function AppNavLink({ name, destination }) {
  return (
    <NavLink
      exact={true}
      className="font-semibold text-lg block lg:inline-block sm:text-center text-gray-600 lg:bg- lg:mt-0 hover:text-indigo-600 lg:pr-16 "
      activeClassName="text-indigo-600"
      to={destination}
    >
      {name}
    </NavLink>
  );
}
