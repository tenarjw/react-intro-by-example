import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
return <span>Witaj {props.text}!!</span>
}

const App = () => (
<div><Hello text="ŚWIAT"/></div>
);

ReactDOM.render(<App/>, document.getElementById('root'));