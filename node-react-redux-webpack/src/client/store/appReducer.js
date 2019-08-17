import bucket from './bucket/reducers';
import products from './products/reducers';

import { combineReducers } from 'redux';

const appReducer = combineReducers({ bucket, products });

export default appReducer;
