import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Secret from './components/Secret';

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
            <Route path="/secret" component={Secret} />
          </Switch>
        </Router>
      </div>
    );
  }
}