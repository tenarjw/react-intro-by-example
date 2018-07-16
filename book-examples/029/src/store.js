import reducerLicznik from './licznik';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';

const middleware = [thunk, logger];

const reducer = combineReducers({
   rlicznik: reducerLicznik,
   // ....
 });

export default createStore(
  reducer,
  undefined,
  applyMiddleware(...middleware)
);