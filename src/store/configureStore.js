/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import promise from 'redux-promise';
import createReducers from 'reducers';

export default function configureStore(initialState = {}) {
  // Create the store with middlewares
  // 1. promise: Makes redux-promise work
  // 2. multi: Makes redux-multi work
  // 3. thunk: Makes redux-thunk work
  const middlewares = [
    thunk,
    multi,
    promise
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
      : compose;
  /* eslint-enable */

  return createStore(
    createReducers(),
    initialState,
    compose(applyMiddleware(...middlewares), composeEnhancers)
  );
}
