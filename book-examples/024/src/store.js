import { createStore } from 'redux';

const ACTION_ZMIANA = 'ACTION_ZMIANA';

export function zmiana(index,value) {
   return {
     type : ACTION_ZMIANA,
     index,
     value
   }
}

function stanPoczatkowy() {
  return ({
    i1 : '0',
    i2: '0'})
}

const reducer = (state, action) => {
 if (action.type==ACTION_ZMIANA) {
   let i1, i2;
   if (action.index===1) {
       i1=action.value; i2=state.i2
     }
   else { i2=action.value;i1=state.i1;}
   return({
     ...state,
      i1 : i1, i2: i2
    });
 } else {
   return state;
 }
}

export const store = createStore(
  reducer,
  stanPoczatkowy()
)
