//@flow

import React  from 'react';

export class Wynik extends React.Component {
    render() {
        return <span>{this.props.msg}</span>
    }
}

export default class XO extends React.Component {
    zmiana = () => {
     this.props.zmiana(this.props.x,this.props.y)
    }
    render() {
      return <td onClick={this.zmiana}>{this.props.c}</td>;
    }
}
