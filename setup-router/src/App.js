import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { NotFound } from './components/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="" component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
