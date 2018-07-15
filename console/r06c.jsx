const React = require("react");

// html tag
const htmlElement = (<div>Hello world</div>);

// React Element
const Hello = props => (<div>{props.text}</div>)

// React Element without jsx
const ReactElement = React.createElement('div', null, 'Hello World');

// React Element with jsx Hello
const ReactElementJsx = (<Hello text="Hello world" />);

console.log(htmlElement);
console.log(ReactElement);
console.log(ReactElementJsx);
