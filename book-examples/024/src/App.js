import React, { Component } from 'react';
import ButtonI, { ButtonO } from './buttons';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { zmiana } from './store';

class App extends Component {

  constructor(props) {
    super(props);
    this.powrot=this.powrot.bind(this);
  }

  powrot(i,v) {
    this.props.zmiana(i,v);
  }


  render() {
    return (
      <div className="App">
       [<ButtonI zmiana={this.powrot} i={1}
                 v={this.props.store.i1}/>xor
        <ButtonI zmiana={this.powrot} i={2}
                 v={this.props.store.i2}/>
       ] =&gt;
       <ButtonO result={this.props.store.i1 !==
            this.props.store.i2 ? '1' : '0'} />
      </div>
      );
    }
  }

///////////// wstrzykiwanie store do props
  const mapStateToProps = state => {
    return {
      store : state
    }
  }

  const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { zmiana },
    dispatch
  )

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
