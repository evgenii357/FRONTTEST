import {
    PLUS_PRODUCT_TO_BUCKET,
    MINUS_PRODUCT_TO_BUCKET
} from './actions';

import { appStore } from '../store';

const initialState = {
    data: []
};

const bucketReducer = (state = initialState, action) => {
    let newData;
    let index;

    switch (action.type) {
        case PLUS_PRODUCT_TO_BUCKET:  
            newData = [...state.data];
            index = newData.findIndex(value => value.product._id === action.productId);

            index > (-1) ? newData[index].quantity = newData[index].quantity + 1 : newData.push({
                product: appStore.getState().products.data.find(value => value._id === action.productId),
                quantity: 1
            }) ;

            return {
                ...state,
                data: newData
            };

        case MINUS_PRODUCT_TO_BUCKET:
            newData = [...state.data];
            index = newData.findIndex(value => value.product._id === action.productId);
    
            newData[index].quantity === 1 ? newData.splice(index, 1) : newData[index].quantity = newData[index].quantity - 1;
            
            return {
                ...state,
                data: newData
            };

        default:
            return state;
    }
};

export default bucketReducer;