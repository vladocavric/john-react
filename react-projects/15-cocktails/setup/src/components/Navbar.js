import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<Link to='/'>
					<img src={logo} alt='logo' className='logo' />
				</Link>
				<div className='nav-links'>
					<NavLink to='/'>Home</NavLink>
					<NavLink to='/about'>About</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
