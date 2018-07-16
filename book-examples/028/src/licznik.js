
// akcje
export const INCREMENT_REQUEST = 'licznik/INCREMENT_REQUEST';
export const INCREMENT = 'licznik/INCREMENT';


export const stanPoczatkowy = {
  licznik : 0,
  zwiekszany: false
}

export default /*const reducer = */ (state = stanPoczatkowy, action) => {
  switch (action.type) {
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
