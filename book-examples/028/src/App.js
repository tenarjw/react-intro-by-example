import React, { Component } from 'react';

import {increment, INCREMENT_REQUEST, INCREMENT } from './licznik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  handleClick = () => {
    console.log('increment: start');
    this.props.dispatch( {
      type: INCREMENT_REQUEST
    });
    console.log('increment: delay');
    setTimeout(() => {  // 2 sekundy opóźnienia
      console.log('increment: execute');
      this.props.dispatch( {
        type: INCREMENT
      });
    }, 2000);
  }

  render() {
    return (
      <div>
          <button onClick={ this.handleClick }
             disabled={this.props.licznik.zwiekszany }
          >
          Zwiększ
          </button>
          <p>
            Stan = {this.props.licznik.licznik}
          </p>
      </div>
    );
  }
}

const mapStateToProps = state => { 
//  console.log(state);
  return { licznik: state.rlicznik    }
}

 export default connect(mapStateToProps)(App);
