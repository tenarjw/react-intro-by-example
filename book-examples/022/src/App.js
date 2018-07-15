import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { klikniecie } from './magazyn';

class App extends Component {

  render() {
    return (
      <div className="App">
      <button onClick={this.props.klikniecie}>
        Licznik = {this.props.stan_redux.licznik}
      </button>
      </div>
    );
  }
}

//export default App;
const mapStateToProps = stanMagazynu => {
  return {
    stan_redux : stanMagazynu
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {  klikniecie },
  dispatch
)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
