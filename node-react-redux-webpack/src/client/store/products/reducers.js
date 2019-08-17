import {
    SET_PRODUCTS,
    SET_ACTIVE_CATEGORY
} from './actions';

const initialState = {
    data: [],
    activeCategory: 1
};

const productsReducer = (state = initialState, action) => {   
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                data: action.data
            };

        case SET_ACTIVE_CATEGORY:
            return {
                ...state,
                activeCategory: action.activeCategory
            };

        default:
            return state;
    }
};

export default productsReducer;