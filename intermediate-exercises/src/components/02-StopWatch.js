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
  constructor(pros) {
    super(pros);
    this.state = { time: 0 };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
  }
  startTimer = function() {
    this.interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1);
  };
  stopTimer = function() {
    clearInterval(this.interval);
  };
  clearTimer = function() {
    this.setState({ time: 0 });
  };
  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>Stop Watch</h1>
        <p>
          <span>{time}</span>
        </p>
        <button onClick={this.startTimer}>Start </button>
        <button onClick={this.stopTimer}>Stop </button>
        <button onClick={this.clearTimer}>Clear </button>
      </div>
    );
  }
}

export default StopWatch;
