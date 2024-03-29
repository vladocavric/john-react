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

const products_reducer = (state, action) => {
	if (action.type === SIDEBAR_OPEN) {
		return { ...state, showSidebar: true };
	}
	if (action.type === SIDEBAR_CLOSE) {
		return { ...state, showSidebar: false };
	}
	if (action.type === GET_PRODUCTS_BEGIN) {
		return { ...state, isLoading: true };
	}
	if (action.type === GET_PRODUCTS_SUCCESS) {
		return { ...state, isLoading: false, products: action.products };
	}
	if (action.type === GET_PRODUCTS_ERROR) {
		return { ...state, isLoading: false, error: action.error };
	}
	if (action.type === GET_SINGLE_PRODUCT_BEGIN) {
		return { ...state, isLoading: true };
	}
	if (action.type === GET_SINGLE_PRODUCT_SUCCESS) {
		return {
			...state,
			singleProduct: action.singleProduct,
			isLoading: false,
		};
	}
	return state;
	throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
