import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// serviceWorker to cache - nie jest niezbędny
// Service worker only works in secure mode either in https or localhost. It doesnot work in local resources like file:// or http.
// https://stackoverflow.com/questions/39136625/service-worker-registration-failed
//import registerServiceWorker from './registerServiceWorker';
// https://stackoverflow.com/questions/47953732/what-does-registerserviceworker-do-in-react-js

ReactDOM.render(<App klasa="plansza"/>, document.getElementById('root'));
//registerServiceWorker();
