import React, { Component } from 'react';
import './buttons.css';

class ButtonI extends Component {
  zmiana = () => {
    let nValue='0';
    if (this.props.v==='0') nValue='1';
    this.props.zmiana(this.props.i,nValue);
  }

  render() {
    return (
      <button onClick={this.zmiana}>
        {this.props.v}
      </button>
    );
  }
}

let ButtonO = (props) => (<button>{props.result}</button>);

export default ButtonI;
export {ButtonO};
