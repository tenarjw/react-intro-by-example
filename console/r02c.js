'use strict';

var React = require("react");

// React component
// https://reactjs.org/docs/react-api.html
// React.createElement(type, [props],  [...children])

var reactComponent = React.createElement('div', null, 'Hello World');

print(reactComponent);

function print(o,level='') {
  for (var p in o) {
    console.log(level+p+':'+typeof(p)+'=>'+typeof(o[p]));
    console.log(o[p]);
    if (typeof(o[p])==='object') print(o[p],level+'!');
    console.log('-------------------------'); 
  }
}



