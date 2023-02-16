import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import GeneralContext from './context';

const Home = () => {
	const { modalToggle, sidebarToggle } = useContext(GeneralContext);
	const handleModal = () => {
		modalToggle();
	};
	return (
		<main>
			<FaBars className='sidebar-toggle ' onClick={sidebarToggle} />{' '}
			<button className='btn' onClick={handleModal}>
				show modal
			</button>
		</main>
	);
};

export default Home;
