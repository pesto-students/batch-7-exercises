import React, { Component } from "react";

/*
 * Exercise 2:
 *
 *  Create a `StopWatch` component that has a Start/Stop button and a Clear
 *  button.
 *
 *  Pressing Start will start a timer and the lapsed time in
 *  milliseconds should be displayed above the buttons.
 *
 *  Once started the Start button should change to Stop. Clicking Stop
 *  will stop the timer but lapsed time will be preserved.
 *
 *  Clicking Start again will resume the timer from where it left off.
 *
 *  Clicking Clear will stop the timer if it's running and reset the lapsed time to 0.
 */

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeElapsed: 0,
      stopTimer: true,
      clearTimer: false
    };
  }

  componentDidMount() {
    this.setState({ timeElapsed: 0 });
  }

  render() {
    return (
      <div>
        <h1>Timer : {this.state.timeElapsed}</h1>
        <button onClick="">Start</button>
        <button>Stop</button>
        <button>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
