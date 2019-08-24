import React from 'react';
import ReactDOM from 'react-dom';

export default class SimpleComponent extends React.Component {

  render() {
    return (
      <div> Hello World! </div> 
    );
  }    

}

ReactDOM.render(<SimpleComponent />, document.getElementById('root'));
