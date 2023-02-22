import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail = ({ strDrinkThumb, strDrink, strGlass, idDrink, strAlcoholic }) => {
	return (
      <article className='cocktail'>
        <img src={strDrinkThumb} alt={strDrink} />
      <div className='cocktail-footer'>
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strAlcoholic}</p>
        <Link to={`/cocktails/${idDrink}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>
	);
};

export default Cocktail;
