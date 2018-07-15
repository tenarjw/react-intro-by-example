// komponent jsx

const React = require("react");

function Hello(props) {
  return <span>{ props.text }</span>;
}


function App() {
  return <Hello text='Witaj świecie!' />;
}

let element=App();
console.log(element);