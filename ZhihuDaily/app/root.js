
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import storeConfig from './store/storeConfig';
import App from './containers/app'

import rootSaga from './sagas/rootSaga'

store = storeConfig()
store.runSaga(rootSaga)

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root




