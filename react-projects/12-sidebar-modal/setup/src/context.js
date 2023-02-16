import React, { useState } from 'react';

const GeneralContext = React.createContext({
	showSidebar: false,
	showModal: false,
	modalToggle: () => {},
	sidebarToggle: () => {},
});

export const GeneralContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
    const modalToggle = () => {
        setShowModal(prevState => !prevState)
    }
    const sidebarToggle = () => {
        setShowSidebar(prevState => !prevState)
    }
	return (
		<GeneralContext.Provider value={{ showModal, showSidebar, modalToggle, sidebarToggle }}>
			{props.children}
		</GeneralContext.Provider>
	);
};

export default GeneralContext;
