import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return React.createElement('input', 
   { type: 'button', value: "Kliknij mnie!" });
}

ReactDOM.render(App(), document.getElementById('root'))