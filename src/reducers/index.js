import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchReducer from './searchReducer';
import researchReducer from './researchReducer';

const rootReducer = combineReducers({
  searchReducer,
  researchReducer,
  routing: routerReducer
});

export default rootReducer;