import auth from './auth/reducers';
import dialog from './Dialog/reducers';

import { combineReducers } from 'redux';

const appReducer = combineReducers({ auth, dialog });

export default appReducer;
