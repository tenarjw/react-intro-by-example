import 'assets/css/material-dashboard-react.css?v=1.2.0';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';
import indexRoutes from 'routes';
//import LoginForm from './components/Login'
import { Provider } from 'react-redux';
import {store } from 'store';

import { MuiThemeProvider  } from '@material-ui/core/styles';
import theme  from './cfg/theme';

import i18n from './cfg/i18n';
import { I18nextProvider } from 'react-i18next';

import { createBrowserHistory } from 'history';
const hist = createBrowserHistory();


ReactDOM.render(
<I18nextProvider i18n={i18n as any}>
 <MuiThemeProvider theme={theme}>
  <Provider store={store}>
   <Router history={hist}>
    <Switch>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} component={prop.component} key={key} />;
      })}
    </Switch>
   </Router>
  </Provider>
 </MuiThemeProvider>
</I18nextProvider>
,
  document.getElementById('root'),
);

