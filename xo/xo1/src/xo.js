import React  from 'react';

class XO extends React.Component {

  state: { // w zasadzie nie potrzebne w tym miejscu
    content: '?',
  }

  constructor(props) {
    super(props);
    this.state = {
      content: '?'
    };
    this.onClick = this.onClick.bind(this);
    // jeśli w funkcji używamy this - musi być bind
    // bez tego TypeError: Cannot read property 'setState' of undefined
  }

   zmiana(xo) {
     if (xo===' ') return 'x';
     else if (xo==='x') return 'o';
     else return ' ';
   }

  onClick() {
    console.log('zmiana');
    this.setState( // spowoduje ponowny render()
    (prevState, props) => ({
      content: this.zmiana(prevState.content)
    }));
  }

 render() {
   return <td onClick={this.onClick}>{this.state.content}</td>
 }
}

class Wynik extends React.Component {

  state: {
    opis: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      opis: 'Kółko i Krzyżyk',
    };
  }

  wynik(msg) {
    this.setState(
    (prevState, props) => ({
      opis: msg,
    }));
  }

 render() {
   return <span>{this.state.opis}</span>
 }
}

export {Wynik};
export default XO;
