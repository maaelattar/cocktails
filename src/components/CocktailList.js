import React from "react";
import Cocktail from "./Cocktail";
import AppTitle from "../ui/AppTitle";
export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <AppTitle title="Loading..." />;
  }
  if (cocktails.length < 1) {
    return <AppTitle title=" no cocktails match your search criteria..." />;
  }
  return (
    <section className="w-9/12 mx-auto">
      <h2 className="text-gray-800 capitalize tracking-wide text-3xl xl:text-4xl text-center my-12">
        cocktails
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-12 gap-x-8">
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
