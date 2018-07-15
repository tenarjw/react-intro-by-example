//@flow

import React  from 'react';
import './App.css';
import XO, {Wynik} from './xo.js';

export default class App extends React.Component {

/*  const state : {
    xo : [], // znak x / o
    kto : '',  // czyj ruch
    stanGry: ''// komunikat
  };
*/
  constructor(props) {
    super(props);
    this.zmiana=this.zmiana.bind(this);
    this.state = {
      xo: new Array(9).fill('?'), // znak x / o
      kto: 'x', // czyj ruch
      stanGry: '* Kółko i Krzyżyk *' // komunikat
    };
  }

  zmiana(x,y) {
    let ix = y*3 + x;
    if (this.state.xo[ix] !== '?') return;
    let nxo  = this.state.xo.slice(); // PŁYTKA KOPIA state.xo.
    nxo[ix] = this.state.kto;
    let nkto='x';
    let nstan = 'ruch: x';
    if (this.state.kto==='x') {
        nkto='o';
        nstan = 'ruch: o';
    }
    if (    ((nxo[0] !== '?') && (nxo[0]===nxo[1]) && (nxo[0]===nxo[2]))
           || ((nxo[3] !== '?') && (nxo[3]===nxo[4]) && (nxo[3]===nxo[5]))
           || ((nxo[6] !== '?') && (nxo[6]===nxo[7]) && (nxo[6]===nxo[8]))
           || ((nxo[0] !== '?') && (nxo[0]===nxo[3]) && (nxo[0]===nxo[6]))
           || ((nxo[1] !== '?') && (nxo[1]===nxo[4]) && (nxo[1]===nxo[7]))
           || ((nxo[2] !== '?') && (nxo[2]===nxo[5]) && (nxo[2]===nxo[8]))
           || ((nxo[0] !== '?') && (nxo[0]===nxo[4]) && (nxo[0]===nxo[8]))
           || ((nxo[2] !== '?') && (nxo[2]===nxo[4]) && (nxo[2]===nxo[6]))  ) {
             nstan = 'KONIEC';
    }
    this.setState({
       ...this.state, // spread operator https://redux.js.org/recipes/using-object-spread-operator
        xo : nxo,
        kto : nkto,
        stanGry : nstan
      });
  }

  render() {
        return (
            <table className="plansza">
                <tbody>
                <tr>
                    <XO x={0} y={0} zmiana={this.zmiana} c={this.state.xo[0]} />
                    <XO x={1} y={0} zmiana={this.zmiana} c={this.state.xo[1]} />
                    <XO x={2} y={0} zmiana={this.zmiana} c={this.state.xo[2]} />
                </tr>
                <tr>
                    <XO x={0} y={1} zmiana={this.zmiana} c={this.state.xo[3]} />
                    <XO x={1} y={1} zmiana={this.zmiana} c={this.state.xo[4]} />
                    <XO x={2} y={1} zmiana={this.zmiana} c={this.state.xo[5]} />
                </tr>
                <tr>
                    <XO x={0} y={2} zmiana={this.zmiana} c={this.state.xo[6]} />
                    <XO x={1} y={2} zmiana={this.zmiana} c={this.state.xo[7]} />
                    <XO x={2} y={2} zmiana={this.zmiana} c={this.state.xo[8]} />
                </tr>
                <tr>
                    <td colSpan="3"><Wynik msg={this.state.stanGry}/></td>
                </tr>
                </tbody>
            </table> );
    }
}
