import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  click = () => {
    let newc=this.state.counter+1
    this.setState({counter: newc});
  }



  render() {
    return (
      <div>
        Licznik: {this.state.counter}<br />
        <button onClick={ this.click }>
        Kliknij by zwiększyć
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
