import reducerLicznik from './licznik';
import {createStore, combineReducers } from 'redux';

const reducer = combineReducers({
  rlicznik: reducerLicznik,
  // .... ewentualne dodatkowe reduktory
});

export default createStore(
  reducer,
  undefined //stanPoczatkowy niepotrzebny - jest domyślna wartość parametru
);