

import { combineReducers } from 'redux';

import hotNewsListReducer from './hotNewsListReducer'
import newsListReducer from './newsListReducer'
import detailsReducer from './detailsReducer'

const rootReducer = combineReducers({
  hotNewsListReducer,
  newsListReducer,
  detailsReducer
});

export default rootReducer;