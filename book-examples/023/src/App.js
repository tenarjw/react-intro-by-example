import React, { Component } from 'react';
import ButtonI, { ButtonO } from './buttons';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {i1 : '0', i2: '1'}
    this.powrot=this.powrot.bind(this);
  }

  powrot(i,v) {
    let i1, i2; 
    if (i===1) { i1=v; i2=this.state.i2}
    else { i2=v;i1=this.state.i1;}
    this.setState({i1 : i1, i2: i2});
  }

  render() {
    return (
      <div className="App">
[<ButtonI zmiana={this.powrot} i={1} v={this.state.i1}/>xor
 <ButtonI zmiana={this.powrot} i={2} v={this.state.i2}/>] =&gt; 
 <ButtonO 
   result={this.state.i1 !== this.state.i2 ? '1' : '0'} />
      </div>
    );
  }
}

export default App;