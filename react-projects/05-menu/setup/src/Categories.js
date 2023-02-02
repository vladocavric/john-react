import React from 'react';

const Categories = ({ categories, selectCategory }) => {

	return (
		<div className='btn-container'>
			{categories.map((category) => (
				<button key={category} className='filter-btn' onClick={() => selectCategory(category)}>{category}</button>
			))}
		</div>
	);
};

export default Categories;
