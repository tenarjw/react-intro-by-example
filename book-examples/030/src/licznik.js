import axios from 'axios';
// akcje
export const INCREMENT_REQUEST = 'licznik/INCREMENT_REQUEST';
export const INCREMENT = 'licznik/INCREMENT';
export const START = 'licznik/START';


export const stanPoczatkowy = {
  licznik : 0,
  zwiekszany: false
}

export default /*const reducer = */ (state = stanPoczatkowy, action) => {
  switch (action.type) {
    case START:
      return { ...state, licznik: action.start }
    case INCREMENT_REQUEST:
      return { ...state, zwiekszany: true }
    case INCREMENT:
      return { ...state,
               licznik: state.licznik+1,
               zwiekszany: false }
    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
      dispatch( {
        type: INCREMENT_REQUEST
      });
      return setTimeout(
        () => {
          dispatch( {
            type: INCREMENT
          });
        },
        2000
      )
  }
}


export const readIniCounter = () => {

  return async dispatch => {
    let request = axios.get('https://verbu.pl/bin/react030.php')
// zob. stan.json
     .then(
       res => {
         console.log('przeczytałem');
         console.log(res.data);
         dispatch( {
           type: START,
           start: res.data.licznik
         });
       })
       }
}