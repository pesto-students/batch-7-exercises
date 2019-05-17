import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    message: 'No!',
    organisationName: '',
  };
  render() {
    const {
      on, input, mainColor, message, organisationName,
    } = this.state;
    console.log(this.state);
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <p className="button-state">{message}</p>
        <button
          onClick={() => {
            this.setState({ message: 'Yes!' });
          }}
        >
          Click Me
        </button>

        <div>
          <h2>{organisationName}</h2>
          <input
            type="text"
            name="organisationName"
            onChange={(event) => {
              this.setState({ organisationName: event.target.value });
            }}
          />
        </div>
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
