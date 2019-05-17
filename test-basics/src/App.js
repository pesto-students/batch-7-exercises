import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    state = {
      on: false,
      input: '',
      mainColor: 'blue',
    }
  }
  

  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <p id="para">Hahaha</p>
        <button onclick='document.getElementById("para").innerHTML = "SHhhhhhh!"'>Click Me!</button>
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
