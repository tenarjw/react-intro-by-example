"use strict";

// komponent jsx

var React = require("react");

function Hello(props) {
  return React.createElement(
    "span",
    null,
    props.text
  );
}

function App() {
  return React.createElement(Hello, { text: "Witaj \u015Bwiecie!" });
}

var element = App();
console.log(element);

