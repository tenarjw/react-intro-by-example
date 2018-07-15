import {createStore } from 'redux';

function stanPoczatkowy() {
  return {
    licznik : 0
  }
}

const naszReducer = (state, action) => {
  if (action.type === ACTION_KLIKNIECIE) {
    let nowyLicznik=state.licznik+1;
    return( {licznik:nowyLicznik} );
  } else return state;
}

const ACTION_KLIKNIECIE = 'ACTION_KLIKNIECIE';

export function klikniecie() {
  return {
    type: ACTION_KLIKNIECIE
  }
}

export const store = createStore(
  naszReducer,
  stanPoczatkowy()
)
