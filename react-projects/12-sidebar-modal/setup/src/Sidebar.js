import React, {useContext} from 'react';
import { FaTimes } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';
import GeneralContext from './context';

const Sidebar = () => {
  const {sidebarToggle, showSidebar} = useContext(GeneralContext);
	return (
		<div className={`sidebar ${showSidebar ? 'show-sidebar' : ''}`}>
			<div className='sidebar-header'>
        <img src={logo} alt="logo" />
        <button className="close-btn" onClick={sidebarToggle}><FaTimes /></button>
      </div>
      <div className="links">
        {links.map(link => <a key={link.id} href={link.url}>{link.icon}{link.text}</a>)}
      </div>
      <div className="social-icons">
        {social.map(link => <a key={link.id} href={link.url}>{link.icon}</a>)}
      </div>
		</div>
	);
};

export default Sidebar;
