import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/filter_reducer';
import {
	LOAD_PRODUCTS,
	SET_GRID_VIEW,
	SET_LIST_VIEW,
	UPDATE_SORT,
	SORT_PRODUCTS,
	UPDATE_FILTERS,
	FILTER_PRODUCTS,
	CLEAR_FILTERS,
} from '../actions';
import { useProductsContext } from './products_context';

const initialState = { gridView: true };

const FilterContext = React.createContext({
	products: [],
	isLoading: false,
	gridView: true,
	setGridView: () => {},
	setListView: () => {},
});

export const FilterProvider = ({ children }) => {
	const { products, isLoading } = useProductsContext();
	const [state, dispatch] = useReducer(reducer, initialState);
	const setGridView = () => {
		dispatch({ type: SET_GRID_VIEW });
	};
	const setListView = () => {
		dispatch({ type: SET_LIST_VIEW });
	};
	return (
		<FilterContext.Provider
			value={{
				products,
				isLoading,
				setGridView,
				setListView,
				gridView: state.gridView,
			}}>
			{children}
		</FilterContext.Provider>
	);
};
// make sure use
export const useFilterContext = () => {
	return useContext(FilterContext);
};
