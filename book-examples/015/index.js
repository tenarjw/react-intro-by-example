import React, { Component } from 'react';
import { render } from 'react-dom';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  click() {
    this.setState( 
      (prevState, props) => (
        { counter: prevState.counter + 1 }
      )
    );
  }

  render() {
    return (
      <div>
        Licznik: {this.state.counter}<br />
        <button onClick={ this.click.bind(this) }>
        Kliknij by zwiększyć
        </button><br />
        alternatywa:<br />
        <button onClick={ ()=>this.click()}>
        Kliknij by zwiększyć
        </button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
