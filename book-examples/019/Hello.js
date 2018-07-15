import React from 'react';

export default class Hello extends React.Component {
 
  constructor() {
    super();
    this.state = {
    opacity:0
    }
  }
  getInitialState() {
   return {
    opacity: 1.0
   };
  }

  componentDidMount() {
    this.timer = setInterval(
       () => {
      var opacity = this.state.opacity;
      opacity -= .05;
      if (opacity < 0.1) {
        opacity = 1.0;
      }
      this.setState({
      opacity: opacity
      });
    }, 100);
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    alert('OK')
  }

  render() {
   return (
    <div style={{opacity: this.state.opacity}}>
    Hello {this.props.name}
    </div>
  );
  }
}

