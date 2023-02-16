import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNav = () => {
    console.log('click')
    setShowNav(prevState => !prevState)
  }
 console.log(showNav)
	return (
		<nav>
			<div className=' nav-center'>
				<div className='nav-header'>
					<img src={logo} alt='logo' className='logo' />
					<button className='nav-toggle' onClick={handleNav}>
						<FaBars />
					</button>
				</div>

				<div className={`links-container ${showNav ? 'show-container' : ''}`}>
					<ul className='links'>
						{links.map((link) => (
							<li key={link.id}>
								<a href={link.url}>{link.text}</a>
							</li>
						))}
					</ul>
				</div>

				<div className='social-icons'>
					{social.map((link) => (
						<a key={link.id} href={link.url}>
							{link.icon}
						</a>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
