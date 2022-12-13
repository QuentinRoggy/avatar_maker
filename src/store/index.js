/* eslint-disable max-len */
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers/index';

import avatarMiddleware from '../middleware/avatarMiddleware';

// eslint-disable-next-line max-len
const middlewareEnhancer = applyMiddleware(avatarMiddleware);

const composedEnhancers = composeWithDevTools(middlewareEnhancer);

const store = createStore(
  // le reducer
  reducer,
  composedEnhancers,
);

// const persistor = persistStore(store);

export { store };
