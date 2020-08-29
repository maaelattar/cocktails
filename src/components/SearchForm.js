import React, { useRef, useEffect } from "react";
import AppTitle from "../ui/AppTitle";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef("");
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };
  return (
    <div>
      <AppTitle title="search cocktails" />
      <form className="w-6/12 mx-auto shadow">
        <input
          class="appearance-none block w-full h-20 bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
          type="text"
          name="name"
          id="name"
          onChange={searchCocktail}
          ref={searchValue}
          placeholder="Search Your Favorite Cocktail"
        />
      </form>
    </div>
  );
}
