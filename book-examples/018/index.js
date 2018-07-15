import React, { Component } from 'react';
import { render } from 'react-dom';

class Person extends React.Component {
  render() { 
    return ( <li> { this.props.name } 
       <span> (age: { this.props.age }) </span></li> ); 
  }
}

class App extends Component {

  render() {
    Person.defaultProps = { age: 'unknown' };
    return (
      <ul>
      <Person name="Zbigniew Nowak" age="34" />
      <Person name="Jan Kowalski" />
      </ul>
    );
  }
}

render(<App />, document.getElementById('root'));
