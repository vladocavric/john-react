import React from 'react';
import { useFilterContext } from '../context/filter_context';
import GridView from './GridView';
import ListView from './ListView';

const ProductList = () => {
	const { products, isLoading, gridView } = useFilterContext();
	if (isLoading) {
		return <h3>Loading...</h3>;
	}
	return (
		<>
			{gridView && <GridView products={products} />}
			{!gridView && <ListView products={products} />}
		</>
	);
};

export default ProductList;
