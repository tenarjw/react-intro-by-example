import React, { Component } from 'react';
import { render } from 'react-dom';

import {Button, ButtonGroup, Text} from 'react-bootstrap';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      counter: 0
    };
  }

  click = () => {
    this.setState( 
      (prevState, props) => (
        { counter: prevState.counter + 1 }
      )
    );
  }

  render() {
    return (
<div>
<ButtonGroup>
<Button bsStyle="warning" onClick={ this.click  } >
Kliknij {this.state.counter }</Button>
</ButtonGroup>
</div>
    );
  }
}

render(<App />, document.getElementById('root'));
