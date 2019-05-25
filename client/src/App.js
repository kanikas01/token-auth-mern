import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Secret from './components/Secret';
import withAuth from './components/withAuth';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/secret">Secret</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/secret" component={withAuth(Secret)} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
  }
}