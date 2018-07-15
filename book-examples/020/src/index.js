import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const Hello = props => (<div>{props.text}</div>);
const HtmlElement = <div>Hello world!</div>;
const HtmlComponent = () => (HtmlElement);
const ReactElement = React.createElement('div', null, 'Hello World');
const ReactElementJsx = <Hello text="Hello world!!!" />;
const ReactComponentJsx = ()=> {return  <Hello text="Hello world!!!!" />};

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    
    return (
      <div>
        <Hello text="Hello World!!" /><br />
        <HtmlComponent />
        { ReactElement }
        { ReactElementJsx }
        <ReactComponentJsx />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
