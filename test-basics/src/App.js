import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: "",
    mainColor: "blue",
    paragraphText: "No!"
  };
  changeText() {
    const { paragraphText } = this.state;
    if (paragraphText === "No!") {
      this.setState(previousState => {
        return {
          ...previousState,
          paragraphText: "Yes!"
        };
      });
    } else {
      this.setState(previousState => {
        return {
          ...previousState,
          paragraphText: "No!"
        };
      });
    }
  }
  changeHeading(event) {
    this.setState(previousState => {
      return {
        ...previousState,
        input: event.currentTarget.value
      };
    });
  }
  handleStrings(str) {
    if (str === "Hello World") {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div className={this.state.mainColor}>
        <h1>Welcome to React</h1>
        <p className="button-state">{this.state.paragraphText}</p>
        <button onClick={() => this.changeText()} />
        <h2>{this.state.input}</h2>
        <input
          type="text"
          value={this.state.input}
          onChange={event => this.changeHeading(event)}
        />
      </div>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {hide, address} = this.props;
    return (
      hide ? null : <a href={address}></a>
    )
  }
}


export default App;
