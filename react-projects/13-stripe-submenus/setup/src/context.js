import React, { useState, useEffect, useCallback } from 'react';
import sublinks from './data';

const AppContext = React.createContext({
	isSidebarOpen: false,
	showSidebar: () => {},
	closeSidebar: () => {},
	isSubmenuOpen: false,
	displaySubmenu: () => {},
	handleSubmenu: () => {},
	closeSubmenu: () => {},
	page: null,
	links: [],
    position: null
});

export const AppProvider = (props) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [page, setPage] = useState('');
	const [links, setLinks] = useState([]);
    const [position, setPosition] = useState(null);

	const getVw = useCallback(() => {
		return Math.max(
			document.documentElement.clientWidth || 0,
			window.innerWidth || 0
		);
	}, []);
	const [clientWidth, setVw] = useState(getVw());

	const showSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};

	const displaySubmenu = () => {
		setIsSubmenuOpen(true);
	};
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};

	const handleSubmenu = (e) => {
		// console.log(e.target.className)
		if (e.target.className === 'link-btn') {
            console.log(e.target.getBoundingClientRect())
			const [submenuContent] = sublinks.filter(
				(submen) => submen.page === e.target.innerText.toLowerCase()
			);
			setPage(submenuContent.page);
			setLinks(submenuContent.links);
            setPosition((e.target.getBoundingClientRect().left + e.target.getBoundingClientRect().right) / 2)
		} else {
            setIsSubmenuOpen(false)
        }
	};

    useEffect(() => {
       if(clientWidth < 800) {
        setIsSubmenuOpen(false)
       }
    }, [clientWidth]);

	useEffect(() => {
		const handleResize = () => {
			setVw(getVw());
		};
    
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [getVw]);

    // console.log(getVw())
	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				showSidebar,
				closeSidebar,
				isSubmenuOpen,
				displaySubmenu,
				handleSubmenu,
				page,
				links,
                position,
                closeSubmenu
			}}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppContext;
