import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: "",
    mainColor: "blue",
    paragraphText: 'No!',
  };
  changeText() {
    const { paragraphText } = this.state;
    if (paragraphText === 'No!') {
      this.setState((previousState) => {
        return {
          ...previousState,
          paragraphText: 'Yes!',
        }
      })
    } else {
      this.setState((previousState) => {
        return {
          ...previousState,
          paragraphText: 'No!',
        }
      })
    }
  }
  changeHeading(event) {
    this.setState((previousState) => {
      return {
        ...previousState,
        input: event.target.value,
      }
    })
  }
  render() {
    return (
      <div className={this.state.mainColor}>
        <h1>Welcome to React</h1>
        <p className='button-state'>{this.state.paragraphText}</p>
        <button onClick={() => this.changeText()} />
        <h2>{this.state.input}</h2>
        <input type="text" value={this.state.input} onChange={() => this.changeHeading()} />
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
