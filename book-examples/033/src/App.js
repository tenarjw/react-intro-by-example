import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';

const podstawowyStylNaglowka = {
  color: 'red',
  fontSize: '2em',
  fontFamily: 'courier',
  textAlign: 'center'
}

const stylNaglowka = {
  ...podstawowyStylNaglowka,
  color: 'blue'
}

const Span = styled.span`background-color : green`;

class App extends Component {

  render() {
    return (
      <div className="naglowek" style={ stylNaglowka }>
      Dzień <br />
      <Span >Dobry</Span>
      </div>
    );
  }
}

export default App;
