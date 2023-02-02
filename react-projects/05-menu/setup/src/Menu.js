import React from 'react';

const Menu = ({ meals }) => {
	return (
		<div className='section-center'>
			{meals.map((meal) => (
				<article key={meal.id} className='menu-item'>
					<img src={meal.img} alt={meal.title} className='photo' />
					<div className='item-info'>
						<header>
							<h4>{meal.title}</h4>
              <h4 className='price'>${meal.price}</h4>
						</header>
            <div className='item-text'>{meal.desc}</div>
					</div>
				</article>
			))}
		</div>
	);
};

export default Menu;
