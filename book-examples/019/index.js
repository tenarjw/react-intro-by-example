import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      hello : 0
    };
  }

  hOn = () => {
    this.setState({
      ...this.state,
      hello:1
    })
  }

  hOff = () => {
    this.setState({
      ...this.state,
      hello:0
    })
  }

  render() {
    if (this.state.hello)
     return (
      <div>
        <Hello name={this.state.name} />
        <button onClick={this.hOff } >kliknij</button>
       </div>
     );
    else 
     return (
      <div>
        <button onClick={this.hOn } >kliknij</button>
      </div>
     );
  }
}

render(<App />, document.getElementById('root'));
