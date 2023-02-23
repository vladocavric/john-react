import React, { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const SingleCocktail = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [cocktail, setCocktail] = useState(null);
	const { id } = useParams();

	// console.log(cocktail)

	useEffect(() => {
		const fetchCocktail = async () => {
			try {
				setIsLoading(true);
				const response = await fetch(`${url}${id}`);
				const { drinks } = await response.json();
				const [drink] = drinks;

				if (drinks.length) {
					const {
						strDrink: name,
						strCategory: category,
						strAlcoholic: info,
						strGlass: glass,
						strInstructions: instructions,
						strDrinkThumb: image,
					} = drink;

					let ingr = [];
					for (const key in drink) {
						if (
							drink[key] !== null &&
							key.includes('strIngredient')
						) {
							ingr.push(drink[key]);
						}
					}

					const newCocktail = {
						name,
						category,
						info,
						glass,
						instructions,
						image,
						ingredients: ingr,
					};
					setCocktail(newCocktail);
				}

				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				console.log(error);
			}
		};

		fetchCocktail();
	}, [id]);

	if (isLoading) return <Loading />;
	if (!cocktail) return <h2 className="section-title">no cocktail to display</h2>;

	const { name, category, info, glass, instructions, image, ingredients } =
		cocktail;
	return (
		<section className='section cocktail-section'>
			<Link to='/' className='btn btn-primary'>
				back home
			</Link>
			<h2 className='section-title'>{name}</h2>
			<div className='drink'>
				<img src={image} alt={name} className='drink-img' />
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name:</span>
						{name}
					</p>
					<p>
						<span className='drink-data'>category:</span>
						{category}
					</p>
					<p>
						<span className='drink-data'>info:</span>
						{info}
					</p>
					<p>
						<span className='drink-data'>glass:</span>
						{glass}
					</p>
					<p>
						<span className='drink-data'>instructions:</span>
						{instructions}
					</p>
					<p>
						<span className='drink-data'>ingredients:</span>
						{ingredients.map((item, index) => <span key={index}>item</span>)}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
