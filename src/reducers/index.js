import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  searchReducer,
  routing: routerReducer
});

export default rootReducer;