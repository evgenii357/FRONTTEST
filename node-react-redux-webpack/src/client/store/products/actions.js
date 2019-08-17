export const SET_PRODUCTS = 'SET_PRODUCTS';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const setProducts = data => ({
	type: SET_PRODUCTS,
	data
});

export const setActiveCategory = activeCategory => ({
	type: SET_ACTIVE_CATEGORY,
	activeCategory
});

