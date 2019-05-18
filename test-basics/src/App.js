import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: "",
    mainColor: "blue",
    inputVal: "No!"
  };

  handleClick = () => {
    this.setState({ inputVal: "Yes!" });
    console.log(this.state.inputVal);
  };

  handleInput = () => {
    this.setState({ input: "Pesto" });
  };

  handleStrings = str => {
    return str.length > 0;
  };

  render() {
    return (
      <div className={"App " + this.state.mainColor}>
        <h1>Welcome to React</h1>
        <button onClick={this.handleClick}>button</button>
        <p className="button-state">{this.state.inputVal}</p>
        <input type="text" name="test" onChange={this.handleInput} />
        <h2>{this.state.input}</h2>
        <Link address="www.google.com" />
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
