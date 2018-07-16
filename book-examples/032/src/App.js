import React, { Component } from 'react';
import { BrowserRouter as Router, 
         Route, Link } from 'react-router-dom';

let  M1 = (props) => (<div> Moduł 1</div>);
let  M2 = (props) => (<div> Moduł 2</div>);
let  M3 = (props) => (<div> Moduł 3 
  z parametrem {props.match.params.id}</div>);

class App extends Component {
render() {
return (
<Router>
<div>
<Link  to='/'>Zakładka 1</Link>&nbsp;&nbsp;
<Link to='/2'>Zakładka 2</Link>&nbsp;&nbsp;
<Link to='/3/a'>Zakładka 3 (a)</Link>&nbsp;&nbsp;
<Link to='/3/b'>Zakładka 3 (b)</Link>
<div className="container">
<Route exact path="/" component={M1} />
<Route path="/2" component={M2} />
<Route path="/3/:id" component={M3} />
</div>
</div>
</Router>
);
}
}

export default App;

