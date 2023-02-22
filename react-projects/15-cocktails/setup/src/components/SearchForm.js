import React from 'react';
import { useGlobalContext } from '../context';

const SearchForm = () => {
	const {setSearchTerm} = useGlobalContext()
	const handleChange = e => {
		setSearchTerm(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
	} 
	return (
		<div className='search'>
			<form className='search-form' onSubmit={handleSubmit}>
				<div className='form-control'>
					<label htmlFor='cocktail'>
						search your favorite cocktail
					</label>
					<input type='text' name='cocktail' id='cocktail' onChange={handleChange}/>
				</div>
			</form>
		</div>
	);
};

export default SearchForm;
