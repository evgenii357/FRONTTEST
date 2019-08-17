import { createStore, applyMiddleware, compose } from 'redux';
import appReducer from './appReducer';

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd(action.type);
//   return result;
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const appStore = createStore(
  appReducer
);

// export const appStore = createStore(
//   appReducer,
//   composeEnhancers(applyMiddleware(logger))
// );
// appStore.subscribe(() => console.log('state: ', appStore.getState()));
// appStore.dispatch({ type: 'dasd' });
