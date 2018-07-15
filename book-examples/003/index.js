import React, { Component } from 'react';
import ReactDOM from 'react-dom';


function Hello() {
  return React.createElement(
    "div",
    null,
    "Hello World"
);
}

function App() {
  return React.createElement(Hello, null);
}

ReactDOM.render(App(), document.getElementById('root'))  
