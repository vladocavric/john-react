import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const categories = ['all'];

// for (const item of items) {
// 	if (!categories.includes(item.category)) {
// 		categories.push(item.category);
// 	}
// }

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
	const [meals, setMeals] = useState(items);
  const [categories] = useState(allCategories);
	
  const selectCategory = (category) => {
    if (category.toLowerCase() === 'all') {
      setMeals(items)
      return
    }
    const mealsFromSelectedCategory = items.filter(item => item.category === category)
    setMeals(mealsFromSelectedCategory)
  }
	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>Our Menu</h2>
					<div className='underline'></div>
				</div>
					<Categories categories={categories} selectCategory={selectCategory}/>
					<Menu meals={meals}/>
			</section>
		</main>
	);
}

export default App;
