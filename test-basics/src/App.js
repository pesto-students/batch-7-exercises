import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    textToDisplay: 'No!'
  };

  setHeading(event) {
    this.setState({ input: event.currentTarget.value });
  }

  flipText() {
    const { textToDisplay } = this.state;
    if (textToDisplay === 'No!') {
      this.setState({ textToDisplay: 'Yes!' });
    } else {
      this.setState({ textToDisplay: 'No!' });
    }
  }

  render() {
    const { mainColor, textToDisplay, input } = this.state;
    return (
      <div className={`App + ${mainColor}`}>
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <input type="text" value={input} onChange={(event) => this.setHeading(event)} />
        <p className="button-state">{textToDisplay}</p>
        <button type="button" onClick={() => this.flipText()}>
          Flip the text
        </button>
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
