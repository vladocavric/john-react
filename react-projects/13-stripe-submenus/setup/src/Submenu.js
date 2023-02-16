import React, { useRef, useContext } from 'react';
import AppContext from './context';

const Submenu = () => {
	const { isSubmenuOpen, page, links, position } =
		useContext(AppContext);
	const container = useRef();
	return (
		<>
			<div
				className={`${
					isSubmenuOpen ? 'submenu-nipple show' : 'submenu-nipple'
				}`}
				style={{
					'--sub-menu-position': `${position-5}px`,
				}}></div>
			<aside
				className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
				ref={container}>
				<section>
					<h4>{page}</h4>
					<div className={`submenu-center col-4`}>
						{links.map((link, index) => {
							const { url, icon, label } = link;
							return (
								<a key={index} href={url}>
									{icon}
									{label}
								</a>
							);
						})}
					</div>
				</section>
			</aside>
		</>
	);
};

export default Submenu;
