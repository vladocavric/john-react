import {
  LOAD_PRODUCTS,
  SET_LIST_VIEW ,
  SET_GRID_VIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === SET_GRID_VIEW) {
		return { ...state, gridView: true };
  }
  if (action.type === SET_LIST_VIEW) {
		return { ...state, gridView: false };
  }
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
