import React, { Component } from 'react';

import {increment } from './licznik';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class App extends Component {

  handleClick = () => {
    console.log('increment: start');
    this.props.increment();
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

const mapDispatchToProps = dispatch =>
 bindActionCreators(
   { increment, },
   dispatch
 )

export default connect(mapStateToProps, mapDispatchToProps)(App);
