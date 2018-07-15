import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {


  render() {
    const className = 'header';
    const name = "Jan";
    return (
      <div>
      <div className={className}><h1>React</h1></div>
      <div><h2>Witaj {name}</h2></div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
