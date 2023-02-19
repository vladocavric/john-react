const reducer = (currentState, action) => {
	const currentCart = [...currentState.cart];
	const [item] = currentCart.filter((item) => item.id === action.id);
	const restOfItems = currentCart.filter((item) => item.id !== action.id);

	switch (action.type) {
		case 'ADD_ITEM':
			return {};
		case 'INCREASE_ITEM':
			const newCart = currentState.cart.map(item => {
				if(item.id === action.id) {
					item.amount += 1
				}
				return item
			})
			return {
				...currentState,
				cart: newCart,
				amount: currentState.amount + 1,
			};
		case 'DECREASE_ITEM':
			item.amount -= 1;
			return {
				...currentState,
				amount: currentState.amount - 1,
				total: currentState.total - item.price,
			};
		case 'REMOVE_ITEM':
			return {
				...currentState,
				cart: [...restOfItems],
				amount: currentState - item.amount,
			};
		case 'CLEAR_CART':
			return { ...currentState, cart: [], amount: 0, total: 0 };
		case 'GET_TOTAL':
			const newTotal = currentState.cart.map(item => item.amount * item.price).reduce((a, b) => (a + b), 0)
			return { ...currentState, total: newTotal };
		default:
			return { ...currentState };
	}
};

export default reducer;
