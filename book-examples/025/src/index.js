import React, { Component } from 'react';
import { render } from 'react-dom';
import SignUpForm from './form';

class App extends Component {
  render() {
    return (
        <SignUpForm />
    );
  }
}

render(<App />, document.getElementById('root'));
