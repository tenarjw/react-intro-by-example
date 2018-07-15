const React = require("react");

// komponent

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

let element = App();
console.log(element);

