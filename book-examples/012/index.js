import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      counter: 0
    };
    this.timerId = setInterval(this.increment, 1000);
    // Uwaga! Brak zatrzymania zegara!
    // zobacz przykład 019 
  }

  increment = () => {
//!!!NIE    this.counter=this.counter+1;
    let c=this.state.counter+1
    this.setState({counter: c});
  }

  render() {
    return (
      <div>
        Licznik: {this.state.counter}
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
