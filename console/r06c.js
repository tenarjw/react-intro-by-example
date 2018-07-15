'use strict';

var React = require("react");

// html tag
var htmlElement = React.createElement(
  'div',
  null,
  'Hello world'
);

// React Element
var Hello = function Hello(props) {
  return React.createElement(
    'div',
    null,
    props.text
  );
};

// React Element without jsx
var ReactElement = React.createElement('div', null, 'Hello World');

// React Element with jsx Hello
var ReactElementJsx = React.createElement(Hello, { text: 'Hello world' });

console.log(htmlElement);
console.log(ReactElement);
console.log(ReactElementJsx);

