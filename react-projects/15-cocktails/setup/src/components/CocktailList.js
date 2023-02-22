import React, { useEffect, useState, useCallback } from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import useHttp from '../hooks/http';

const CocktailList = () => {
	const [cocktails, setCocktails] = useState([]);
	const { sendRequest, isLoading } = useHttp();
	const { searchTerm } = useGlobalContext();

	const doAfterResponse = useCallback((data) => {
		if (data.drinks) {
			setCocktails(data.drinks);
		} else {
			setCocktails([]);
		}
	}, []);

	

	useEffect(() => {
    let reqDelay 
    if(searchTerm) {
      reqDelay = setTimeout(() => {
        sendRequest(
          { url: `search.php?s=${searchTerm}`, type: 'search' },
          doAfterResponse
        );
      }, 300);
    } else {
      sendRequest(
        { url: `search.php?s=`, type: 'search' },
        doAfterResponse
      );
    }
		
		return () => {
			clearTimeout(reqDelay);
		};
	}, [searchTerm, sendRequest, setCocktails, doAfterResponse]);


	if (isLoading) {
		return <Loading />;
	}

	return (
		<section className='section'>
			<h2 className='section-title'>cocktails</h2>
			<div className='cocktails-center '>
				{cocktails.map((cocktail) => (
					<Cocktail key={cocktail.idDrink} {...cocktail} />
				))}
				{!cocktails.length && <h3>no cocktails for this term</h3>}
			</div>
		</section>
	);
};

export default CocktailList;
