import React, {useContext} from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import AppContext from './context';

const Navbar = () => {
  const {showSidebar, displaySubmenu, handleSubmenu} = useContext(AppContext);
  
	return (
    <nav className='nav' onMouseOver={handleSubmenu} >
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} className='nav-logo' alt='logo' />
        <button className='btn toggle-btn' onClick={showSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className='nav-links'>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            developers
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>
      <button className='btn signin-btn'>Sign in</button>
    </div>
  </nav>
	);
};

export default Navbar;
