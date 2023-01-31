import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, removeTour }) => {
	return (
		<>
			<div className='title'>
				<h2>Out Tours</h2>
				<div className='underline'></div>
			</div>
			<ul>
				{tours.map((tour) => (
					<Tour key={tour.id} tour={tour} removeTour={removeTour} />
				))}
			</ul>
		</>
	);
};

export default Tours;
