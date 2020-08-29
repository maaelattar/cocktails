import React from "react";
import AppTitle from "../ui/AppTitle";

export default function About() {
  return (
    <div className="w-8/12 lg:w-6/12 mx-auto mt-12">
      <AppTitle title="about us" />
      <p className="tracking-widest leading-loose text-justify text-xl lg:text-2xl">
        Retrieves drinks details from TheCocktailDB api, TheCocktailDB was built
        in 2015 to provide a free data source api for drinks online
      </p>
    </div>
  );
}
