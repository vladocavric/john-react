import React, { useState, useEffect, useCallback } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
	const [reviews] = useState(data);
	const [selectedIdex, setSelectedIdex] = useState(0);
	// const { image, name, title, quote } = reviews[selectedIdex];
	const handlePrev = () => {
		setSelectedIdex((prevState) => {
			if (prevState === 0) {
				return reviews.length - 1;
			}
			return prevState - 1;
		});
	};
	const handleNext = useCallback(() => {
		setSelectedIdex((prevState) => {
			if (prevState === reviews.length - 1) {
				return 0;
			}
			return prevState + 1;
		});
	}, [reviews.length]);

	useEffect(() => {
		const time = setTimeout(() => {
			handleNext();
		}, 10000);
		return () => {
			clearTimeout(time);
		};
	}, [selectedIdex, handleNext]);
	return (
		<section className='section'>
			<div className='title'>
				<h2>
					<span>/</span>Reviews
				</h2>
			</div>
			<div className='section-center'>
				<FiChevronLeft
					className='prev'
					onClick={handlePrev}
					style={{ zIndex: 100 }}
				/>
				{reviews.map((rew, index) => {
					const { id, image, name, title, quote } = rew;
					let position = 'nextSlide';
					if (index === selectedIdex) position = 'activeSlide';
					if (
						index === selectedIdex - 1 ||
						(selectedIdex === 0 && index === reviews.length - 1)
					)
						position = 'lastSlide';
					return (
						<article key={id} className={position}>
							<img
								src={image}
								alt={name}
								className='person-img'
							/>
							<h4>{name}</h4>
							<div className='title'>{title}</div>
							<div className='text'>{quote}</div>
							<FaQuoteRight className='icon' />
						</article>
					);
				})}

				<FiChevronRight className='next' onClick={handleNext} />
			</div>
		</section>
	);
}

export default App;
