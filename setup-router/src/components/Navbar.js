import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Contact from './Contact';
import About from './About';
import Home from './Home';
import NotFound from './NotFound';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <Router>
        <ul className="nav">
          <li className="active">
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}
