import React, { useContext, useReducer, useEffect } from 'react';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext({
	cart: [],
	loading: false,
	total: 0,
	increaseItem: () => {},
	decreaseItem: () => {},
	removeItem: () => {},
	clearItems: () => {},
});

const initialState = {
	cart: [],
	loading: false,
	total: 0,
	amount: 0,
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increaseItem = (id) => {
		dispatch({ type: 'INCREASE_ITEM', id });
	};
	const decreaseItem = (id) => {
		const [item] = state.cart.filter((item) => item.id === id);
		if (item.amount === 1) {
			dispatch({ type: 'REMOVE_ITEM', id });
		} else {
			dispatch({ type: 'DECREASE_ITEM', id });
		}
	};
	const removeItem = (id) => {
		dispatch({ type: 'REMOVE_ITEM', id });
	};
	const clearItems = () => {
		dispatch({ type: 'CLEAR_CART' });
	};

	const fetchData = async () => {
		dispatch({ type: 'LOADING' });
		const response = await fetch(url);
		const data = await response.json();
		dispatch({ type: 'DISPLAY_DATA', data });
	};

	useEffect(() => {
		fetchData();
	}, []);

	useEffect(() => {
		dispatch({ type: 'GET_TOTALS' });
	}, [state.cart]);

	return (
		<AppContext.Provider
			value={{
				...state,
				increaseItem,
				decreaseItem,
				removeItem,
				clearItems,
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
