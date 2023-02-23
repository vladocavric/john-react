import React, { useState, useContext, useEffect, useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext({
	loading: true,
	cocktails: [],
	setSearchTerm: () => {},
});

const AppProvider = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [cocktails, setCocktails] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	
	const fetchDrinks = useCallback(async (searchTerm) => {
		try {
			setLoading(true);
			const response = await fetch(`${url}${searchTerm}`);
			const data = await response.json();
			if (data.drinks) {
				const newCocktails = data.drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strCategory,
						strAlcoholic,
						strGlass,
						strInstructions,
						strDrinkThumb,
					} = item;
					let ingr = [];
					for (const key in item) {
						if (
							item[key] !== null &&
							key.includes('strIngredient')
						) {
							ingr.push(item[key]);
						}
					}
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						category: strCategory,
						info: strAlcoholic,
						glass: strGlass,
						instructions: strInstructions,
						ingredients: ingr,
					};
				});
				setCocktails(newCocktails);
			} else {
				setCocktails([]);
			}

			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchDrinks(searchTerm);
	}, [searchTerm, fetchDrinks]);
	return (
		<AppContext.Provider value={{ loading, cocktails, setSearchTerm }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
