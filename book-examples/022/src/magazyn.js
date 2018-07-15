import {createStore } from 'redux';

const ACTION_KLIKNIECIE = 'ACTION_KLIKNIECIE';

const naszReducer = (state = { licznik: 0, }, action) => {
  switch (action.type) {
    case ACTION_KLIKNIECIE: 
      let nowyLicznik=state.licznik+1;
      return Object.assign({}, state, {
         licznik : nowyLicznik,
        });
    default:
        return state;
  }
}

export function klikniecie() {
  return {
    type: ACTION_KLIKNIECIE
  }
}

export const store = createStore( naszReducer, );

