import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Tours from './Tours';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project';
function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	async function getTours() {
		setIsLoading(true);
		try {
			const response = await axios.get(url);
			if (response.statusText !== 'OK') {
				throw new Error('something went wrong');
			}
			setTours(response.data);
			setIsLoading(false);
		} catch (err) {
			console.log(err);
			setIsLoading(false);
		}
	}
	useEffect(() => {
		getTours();
	}, []);

	const removeTour = (id) => {
		const oldTours = [...tours];
		const newTours = oldTours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};
	return (
		<>
			<main>
				{isLoading && <Loading />}
				{!isLoading && !!tours.length && (
					<Tours tours={tours} removeTour={removeTour} />
				)}
				{!tours.length && (
					<div className='title'>
						<h1>No tours left</h1>
            <button onClick={getTours} className="btn">refresh</button>
					</div>
				)}
			</main>
		</>
	);
}

export default App;
