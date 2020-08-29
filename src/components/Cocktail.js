import React from "react";
import AppLink from "../ui/AppLink";
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article class="lg:max-w-sm rounded overflow-hidden shadow-xl">
      <img class="w-full" src={image} alt={name} />
      <div class="px-6 mt-4">
        <h3 class="font-medium text-4xl tracking-widest leading-loose">
          {name}
        </h3>
        <h4 class="font-normal text-xl tracking-widest leading-loose">
          {glass}
        </h4>
        <p class="text-gray-700 text-base">{info}</p>
      </div>
      <div class="px-6 pt-4 pb-10">
        <AppLink name="Details" destination={`/cocktail/${id}`} />
      </div>
    </article>
  );
}
