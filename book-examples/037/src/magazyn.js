import {createStore } from 'redux';

function stanPoczatkowy() {
  return {
    licznik : 0
  }
}

const ACTION_USTAW = 'ACTION_USTAW';
const ACTION_ZWIEKSZ = 'ACTION_ZWIEKSZ';

export function zwieksz() {
  return {
    type: ACTION_ZWIEKSZ
  }
}

export function ustaw(n) {
  return {
    type: ACTION_USTAW,
    licznik : n
  }
}

const naszReducer = (state, action) => {
  if (action.type === ACTION_ZWIEKSZ) {
    let nowyLicznik=state.licznik+1;
    return( {licznik:nowyLicznik} );
  } else if (action.type === ACTION_USTAW) {
    let nowyLicznik=Number(action.licznik);
    return( {licznik:nowyLicznik} );
  } else  return state;
}

export const store = createStore(
  naszReducer,
  stanPoczatkowy(),
)
