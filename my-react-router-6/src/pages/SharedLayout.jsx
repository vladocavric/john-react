import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const SharedLayout = ({user}) => {
	return (
		<>
			<Navbar user={user}/>
			<Outlet />
            <footer>some footer</footer>
		</>
	);
};

export default SharedLayout;
