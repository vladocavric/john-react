import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [selected, setSelected] = useState(0);
	const selectNext = () => {
		setSelected((prevState) => {
			if (prevState === people.length - 1) {
				return 0;
			}
			return prevState + 1;
		});
	};
	const selectPrev = () => {
		setSelected((prevState) => {
			if (prevState === 0) {
				return people.length - 1;
			}
			return prevState - 1;
		});
	};
	const selectRandom = () => {
		const random = Math.floor(Math.random() * people.length);
		setSelected(random);
	};

	return (
		<div className='review'>
			<div className='img-container'>
				<img
					className='person-img'
					src={people[selected].image}
					alt={people[selected].name}
				/>
				<div className='quote-icon'>
					<FaQuoteRight />
				</div>
			</div>
			<div className='author'>{people[selected].name}</div>
			<div className='job'>{people[selected].job}</div>
			<div>{people[selected].text}</div>
			<div>
				<button className='prev-btn' onClick={selectPrev}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={selectNext}>
					<FaChevronRight />
				</button>
			</div>
			<div>
				<button className='random-btn' onClick={selectRandom}>
					Surprise Me
				</button>
			</div>
		</div>
	);
};

export default Review;
