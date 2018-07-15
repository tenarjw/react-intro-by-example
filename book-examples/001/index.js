import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';

var element=React.createElement('div', null, 'Hello  World!');
var div=document.getElementById('root');
ReactDOM.render(element,div);