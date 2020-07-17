import React, { useState, useEffect } from 'react';
import SearchForm from '../components/SearchForm';
import CocktailList from '../components/CocktailList';
export default function Home() {
	const [loading, setLoading] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [cocktails, setCocktails] = useState([]);
	useEffect(() => {
		fetch(
			`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
		)
			.then((response) => response.json())
			.then((data) => setCocktails(data.drinks));
		//return()
	}, [searchTerm]);
	return (
		<main>
			<SearchForm setSearchTerm={setSearchTerm} />
			<CocktailList loading={loading} cocktails={cocktails} />
		</main>
	);
}
