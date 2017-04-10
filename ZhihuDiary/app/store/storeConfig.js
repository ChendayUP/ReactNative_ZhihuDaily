

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import mainReducers from '../reducer/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [];
middlewares.push(sagaMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(mainReducers, initialState);
  // install saga run
  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}

// export function configStore() {
//   const store = createStore(mainReducers)
//   return store;
// }