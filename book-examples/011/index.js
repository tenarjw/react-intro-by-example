import React, { Component } from 'react' ;
import ReactDOM from 'react-dom' ;

class Tekst extends Component {
 render() {
  return (
   <span>{this.props.normal} 
           <i> {this.props.italic} </i></span>
  );
 }
}

class MyComponent extends React.Component {
  render() {
    return <Tekst normal="Hello" italic="World" />;
  }
}

ReactDOM.render( <MyComponent/> , document.getElementById('root'));
