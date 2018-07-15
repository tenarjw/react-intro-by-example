import React from 'react';
import ReactDOM from 'react-dom';

function Hello(props) {
  return React.createElement(
   "span",
   null,
   props.text
  );
}

function App() {
  return React.createElement(Hello, { text: "Witaj świecie!" });
}

ReactDOM.render(App(), document.getElementById('root'))