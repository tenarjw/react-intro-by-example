import React, { Component } from 'react';
import { render } from 'react-dom';


class MyButton1 extends Component {

  render() {
    return <button onClick={this.props.click}>
    kliknij[ {this.props.variant}] {this.props.counter}</button>
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
     counter: 0
    };
  }

  click1 = () => {
    this.setState(
      (prevState, props) => (
        { counter: prevState.counter + 1 }
      )
    );
  }

  click2(){
    this.setState(
      (prevState, props) => (
        { counter: prevState.counter + 1 }
      )
    );
  }

  duza(){
    return 'AA';
  }
  
  render() {
    return (
      <div>
        <MyButton1
           counter={this.state.counter}
//!Źle           click={ this.click1() }
           click={ this.click1 }
           variant={ this.duza() }
        />
        <MyButton1
           counter={this.state.counter}
           click={ () => { this.click2() } }
           variant='B'
        />
        <MyButton1
           counter={this.state.counter}
           click={ this.click2.bind(this) }
           variant='C'
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
