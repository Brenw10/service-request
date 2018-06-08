import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import ServiceRequest from './views/ServiceRequest';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/login' component={Login} />
          <Route path='/service-request' component={ServiceRequest} />
        </Switch>
      </BrowserRouter>
    );
  }
}
