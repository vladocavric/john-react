import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import { useParams, Link } from 'react-router-dom';
import useHttp from '../hooks/http';

const SingleCocktail = () => {
	const { id } = useParams();
	const [cocktail, setCocktail] = useState({});
	const { sendRequest, isLoading } = useHttp();
	const doAfterResponse = (data) => {
		const { drinks } = data;
		const [drink] = drinks;
		setCocktail(drink);
	};

	let ingredients = [];

	for (const key in cocktail) {
		if (cocktail[key] !== null && key.includes('strIngredient')) {
			ingredients.push(cocktail[key]);
		}
	}

	useEffect(() => {
		sendRequest({ url: `lookup.php?i=${id}` }, doAfterResponse);
	}, [id, sendRequest]);
	if (isLoading) {
		return <Loading />;
	}
	return (
		<section className='section cocktail-section'>
			<Link to='/' className='btn btn-primary'>
				back home
			</Link>
			<h2 className='section-title'>{cocktail.strDrink}</h2>
			<div className='drink'>
				<img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
				<div className='drink-info'>
					<p>
						<span className='drink-data'>name :</span>{' '}
						{cocktail.strDrink}
					</p>
					<p>
						<span className='drink-data'>category :</span>{' '}
						{cocktail.strCategory}
					</p>
					<p>
						<span className='drink-data'>info :</span>{' '}
						{cocktail.strAlcoholic}
					</p>
					<p>
						<span className='drink-data'>glass :</span>{' '}
						{cocktail.strGlass}
					</p>
					<p>
						<span className='drink-data'>instructions :</span>{' '}
						{cocktail.strInstructions}
					</p>
					<p>
						<span className='drink-data'>ingredients :</span>
						{ingredients.map((item, index) => {
							return (
								item && (
									<span key={index}>
										{item}
										{index !== ingredients.length - 1 &&
											','}
									</span>
								)
							);
						})}
					</p>
				</div>
			</div>
		</section>
	);
};

export default SingleCocktail;
