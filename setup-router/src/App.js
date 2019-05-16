import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route render={() => <h1>404 Not Found</h1>} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
