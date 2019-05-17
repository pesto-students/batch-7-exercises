import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotMatch from './NotMatch';


import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>

        <ul className="nav">
          <li className="active">
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <Switch>
        <Route exact path="/" />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> 
        <Route component={NotMatch} />
        </Switch>
        
      </BrowserRouter>
    );
  }
}
