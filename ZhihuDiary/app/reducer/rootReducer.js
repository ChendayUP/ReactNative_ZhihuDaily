

import { combineReducers } from 'redux';

import hotNewsListReducer from './hotNewsListReducer'
import lastNewsListReducer from './lastNewsListReducer'
import detailsReducer from './detailsReducer'

const rootReducer = combineReducers({
  hotNewsListReducer,
  lastNewsListReducer,
  detailsReducer
});

export default rootReducer;