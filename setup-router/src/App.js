import React, { Component, Fragment } from 'react';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
      </Fragment>
    );
  }
}

export default App;
