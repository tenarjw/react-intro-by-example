import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link }
  from 'react-router-dom';
import 'App.css';

import Layout  from './layout';

let globalRootPage = null;

let Page = (props) => {
    if ((globalRootPage) &&
     (globalRootPage.state.selected!==props.location.pathname))
      globalRootPage.select(props.location.pathname);
    return( props.location.pathname );
}

export let Header = (props) => (
<div className="jumbotron">
  <h2>
    React i Redux w przykładach!
  </h2>
  <p>
    Więcej przykładów znajdziesz na stronie.
    <a href="https://stackblitz.com/@tenarjw">
    https://stackblitz.com/@tenarjw
    </a>
  </p>
  <p>
    <a className="btn btn-primary btn-large"
    href="https://github.com/tenarjw/react-intro-by-example">
    Github.com
    </a>
  </p>
</div>
);

class Sidebar extends Component {
 render = () => <div>dodatkowe informacje ...
                    do uzupełnienia ...</div>
}

class Content extends Component {
  render() {
    if (this.props.selected==='/')
      return (
        <div>
       <h2>
        Strona główna
 			</h2>
 			<p>
        ...........
 			</p>
 			<p>
 				<button className="btn" href="#">View details »</button>
 			</p>
     </div>
      );
    if (this.props.selected==='/about')
        return (
         <div>autor: Jerzy Wawro, dla fundacji Galicea</div>
        );
    return('');
  }
}

export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { selected : '/'};
    globalRootPage = this;
  }

  select = (path) => { this.setState({...this.state, selected: path}) }

  navigation = (path) => {
   return (
    <Router>
     <nav className="navbar navbar-default navbar-static-top">
         <div className="container">
             <ul className="nav">
                 <li className="nav-item">
                     <Link
                       className="nav-link active"
                       to="/">Home</Link>
                 </li>
                 <li>
                     <Link
                       className="nav-link disabled"
                       to="/about">About</Link>
                 </li>
                 <li className="nav-item">
                     <a className="nav-link disabled"
                     href="https://verbu.pl/epub/48/react-w-przykladach/">
                     React w przykładach</a>
                 </li>
             </ul>

             <p className="navbar-text navbar-right">
                 <Route exact path="/" component={Page} />
                 <Route path="/about"  component={Page} />
             </p>
         </div>
     </nav>
    </Router>
  );
 }

 render() {
  let sidebar = <Sidebar />;
  let content = <Content selected={this.state.selected}/>;
  return(
   <Layout navigation = {this.navigation}
   sidebar = { sidebar }
   content = { content }
   header = { Header }
   path = { this.state.selected }
   title = "Test"
   company = {this.props.company}
   className = "page"
  />
  )
 }
}
