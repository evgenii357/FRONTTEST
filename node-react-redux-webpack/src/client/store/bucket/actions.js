export const PLUS_PRODUCT_TO_BUCKET = 'PLUS_PRODUCT_TO_BUCKET';
export const MINUS_PRODUCT_TO_BUCKET = 'MINUS_PRODUCT_TO_BUCKET';

export const plusProductToBucket = productId => ({
	type: PLUS_PRODUCT_TO_BUCKET,
	productId
});

export const minusProductToBucket = productId => ({
	type: MINUS_PRODUCT_TO_BUCKET,
	productId
});

