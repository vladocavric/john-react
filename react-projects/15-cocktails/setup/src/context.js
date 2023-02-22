import React, { useState, useContext } from 'react';
// import { useCallback } from 'react';

// const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext = React.createContext({
	searchTerm: '',
	setSearchTerm: (term) => {},
});

const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('');

  // const handleSearchTerm = (term) => {
  //   setSearchTerm(term)
  // }

	return (
		<AppContext.Provider
			value={{
				searchTerm,
        setSearchTerm
			}}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
