import React, { useRef } from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const { setSearchTerm } = useGlobalContext();
	const searchTerm = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const searchCocktails = (e) => {
    setSearchTerm(searchTerm.current.value)
  };
	return (
		<section className='section search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='searchTerm'>
						search your favorite cocktails
					</label>
					<input
						type='text'
						ref={searchTerm}
						id='searchTerm'
						onChange={searchCocktails}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
