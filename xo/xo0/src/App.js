import React, { Component } from 'react';
import './App.css';
import XO from './xo.js';

class App extends Component {
 render() {
  return (
  <table className={this.props.klasa}>
<tr><XO></XO><XO></XO><XO></XO></tr>
<tr><XO></XO><XO></XO><XO></XO></tr>
<tr><XO></XO><XO></XO><XO></XO></tr>
</table>
   );
  }
}

export default App;
