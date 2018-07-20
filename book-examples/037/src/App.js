import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, withRouter }
  from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { zwieksz, ustaw } from './magazyn';

class Licznik extends Component {
  componentDidMount = () => {
    if (this.props.N) this.props.ustaw(this.props.N);
    if (this.props.match) {
      console.log(this.props);
      if (this.props.match.params.N)
        this.props.ustaw(this.props.match.params.N);
    }
  }
  render = () => (
      <button onClick={this.props.zwieksz}>
        Licznik = { this.props.reduxStore.licznik }
      </button>
    );
}

const Licznik5 = (props) => (<Licznik N={5}/>)
const LicznikN = (props) => (<div>Licznik z opisem: <Licznik /></div>)

export default class App extends Component {
 render() {
  return(
    <Router>
      <div>
        [<Link  to='/'>Licznik</Link>]
        [<Link  to='/licznik5'>Licznik5</Link>]
        [<Link  to='/licznik/5'>Licznik/5</Link>]
        <div className="container">
          <Route exact path="/licznik/:N" component={LicznikN} />
          <Route exact path="/" component={Licznik} />
          <Route exact path="/licznik5" component={Licznik5} />
        </div>
      </div>
    </Router>
  )
 }
}


const mapStateToProps = store => {
  return {
    reduxStore : store
  }
}
const mapDispatchToProps = dispatch => bindActionCreators(
  {  zwieksz, ustaw },
  dispatch
)
// Licznik=withRouter(Licznik)
Licznik = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Licznik));
