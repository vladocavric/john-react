const reducer = (currentState, action) => {
	const currentCart = [...currentState.cart];
	const [item] = currentCart.filter((item) => item.id === action.id);
	const restOfItems = currentCart.filter((item) => item.id !== action.id);

	switch (action.type) {
		case 'ADD_ITEM':
			return {};
		case 'INCREASE_ITEM':
			const newCart = currentState.cart.map((item) => {
				if (item.id === action.id) {
					item.amount += 1;
				}
				return item;
			});
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
			};
		case 'CLEAR_CART':
			return { ...currentState, cart: [], amount: 0, total: 0 };
		case 'LOADING':
			return { ...currentState, loading: true };
		case 'DISPLAY_DATA':
			return { ...currentState, loading: false, cart: [...action.data] };
		case 'GET_TOTALS':
			// const newTotal = currentState.cart.map(item => item.amount * item.price).reduce((a, b) => (a + b), 0)
			// return { ...currentState, total: newTotal };
			let { total, amount } = currentState.cart.reduce(
				(cartTotal, cartItem) => {
					const { price, amount } = cartItem;
					const itemTotal = price * amount;
					cartTotal.total += itemTotal;
					cartTotal.amount += amount;
					return cartTotal;
				},
				{ total: 0, amount: 0 }
			);
			total = parseFloat(total.toFixed(2));
			return { ...currentState, total, amount };
		default:
			return { ...currentState };
	}
};

export default reducer;
