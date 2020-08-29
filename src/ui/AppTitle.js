import React from "react";

export default function AppTitle({ title }) {
  return (
    <h1 className="text-gray-800 capitalize tracking-wide text-3xl xl:text-4xl text-center my-12">
      {title}
    </h1>
  );
}
