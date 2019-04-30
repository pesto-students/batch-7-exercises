import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }
  render() {
    return (
      <div className="App">
        Welcome to React
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return null;
  }
}

export default App;
