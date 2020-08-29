import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AppTitle from "../ui/AppTitle";
import AppLink from "../ui/AppLink";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          };
          setCocktail(newCocktail);
        } else {
          setCocktail(null);
        }
      } catch (error) {
        console.log("error happened", error);
      }
      setLoading(false);
    }

    getCocktail();
  }, [id]);
  if (loading) {
    return <AppTitle title="Loading..." />;
  }
  if (!cocktail) {
    return <AppTitle title="no cocktail to display" />;
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;

    return (
      <div className="flex flex-col">
        <AppLink name=" back home" destination="/" classes="mt-8" />
        <AppTitle title={name} />
        <div className="w-9/12 mx-auto flex flex-row justify-around">
          <img
            src={image}
            alt={name}
            className="max-w-md w-4/12 max-h-full rounded-lg border shadow"
          />

          <div className="text-left w-7/12 leading-10 tracking-widest font-semibold text-lg align-text-bottom">
            <p className="mt-8">name : {name}</p>
            <p>category : {category}</p>
            <p>info : {info}</p>
            <p>glass : {glass}</p>
            <p>instructions : {instructions}</p>
            <p>
              ingredients :{" "}
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
