import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render = () =>
    <span>Witaj {this.props.text}!!</span>
}

const App = () => (
<div><Hello text="ŚWIAT"/></div>
);

ReactDOM.render(<App/>, document.getElementById('root'));