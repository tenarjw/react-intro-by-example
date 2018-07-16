import React, { Component } from 'react';
import { render } from 'react-dom';
import {Alist, Amap } from './arrays';


class App extends Component {

  render() {
    return (
      <div>
        <Alist />
        <Amap />

      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
