import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';
import {
	SIDEBAR_OPEN,
	SIDEBAR_CLOSE,
	GET_PRODUCTS_BEGIN,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_ERROR,
	GET_SINGLE_PRODUCT_BEGIN,
	GET_SINGLE_PRODUCT_SUCCESS,
	GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
	products: [],
	error: '',
	isLoading: true,
	showSidebar: false,
};

const ProductsContext = React.createContext({
	showSidebar: false,
	openSidebar: () => {},
	closeSidebar: () => {},
	products: [],
	error: '',
	isLoading: true,
});

export const ProductsProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const openSidebar = () => {
		dispatch({ type: SIDEBAR_OPEN });
	};
	const closeSidebar = () => {
		dispatch({ type: SIDEBAR_CLOSE });
	};

	useEffect(() => {
		dispatch({ type: GET_PRODUCTS_BEGIN });
		const getProducts = async () => {
			try {
				const response = await fetch(url);
				const data = await response.json();
				dispatch({ type: GET_PRODUCTS_SUCCESS, products: data });
			} catch (error) {
				dispatch({ type: GET_PRODUCTS_ERROR, error });
				// throw new Error('Something went wrong loading while products');
			}
		};
		getProducts();
	}, []);

	return (
		<ProductsContext.Provider
			value={{
				showSidebar: state.showSidebar,
				openSidebar,
				closeSidebar,
				products: state.products,
				error: state.error,
				isLoading: state.isLoading,
			}}>
			{children}
		</ProductsContext.Provider>
	);
};
// make sure use
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
