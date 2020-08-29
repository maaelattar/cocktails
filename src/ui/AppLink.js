import React from "react";
import { Link } from "react-router-dom";

export default function AppLink({ name, destination, classes }) {
  return (
    <Link
      to={destination}
      className={`inline-block mx-auto bg-indigo-600 hover:bg-indigo-800 text-white font-bold px-8 py-2 rounded ${classes}`}
    >
      {name}
    </Link>
  );
}
