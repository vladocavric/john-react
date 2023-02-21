import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({user}) => {
	return (
		<nav className='navbar'>
			<NavLink
				to='/about'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}>
				About
			</NavLink>
			{!!user && <NavLink
				to='dashboard'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}>
				Dashboard
			</NavLink>}
			{!user && <NavLink
				to='login'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}>
				Login
			</NavLink>}
			<NavLink
				to='products'
				className={({ isActive }) =>
					isActive ? 'link active' : 'link'
				}>
				Products
			</NavLink>
		</nav>
	);
};

export default Navbar;
