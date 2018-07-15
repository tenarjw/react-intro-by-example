import React  from 'react';
import './App.css';
import XO, {Wynik} from './xo.js';



const App = (props) => {
    return (
      <table className={props.klasa}>
        <tbody>
          <tr>
            <XO x="1" y="1"></XO>
            <XO x="2" y="1"></XO>
            <XO x="3" y="1"></XO>
          </tr>
          <tr>
            <XO x="1" y="2"></XO>
            <XO x="2" y="2"></XO>
            <XO x="3" y="2"></XO>
          </tr>
          <tr>
            <XO x="1" y="3"></XO>
            <XO x="2" y="3"></XO>
            <XO x="3" y="3"></XO>
          </tr>
          <tr><td colSpan="3"><Wynik>Kółko i krzyżyk</Wynik></td></tr>
        </tbody>
     </table>
    );
}

export default App;
