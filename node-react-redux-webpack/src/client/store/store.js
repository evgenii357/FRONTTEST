import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './appReducer';

export const appStore = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
