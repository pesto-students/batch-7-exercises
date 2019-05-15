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
      timer: 0,
      stopTimer: true,
      clearTimer: false
    };
    let timerVal;
  }

  componentDidMount() {
    this.setState({ timeElapsed: 0 });
  }

  incrementTimer() {
    const currentTime = this.state.timer + 1;
    this.setState({ timer: currentTime });
  }

  startTimer() {
    this.timerVal = setInterval(this.incrementTimer.bind(this), 1000);
  }

  stopTimer() {
    clearInterval(this.timerVal);
  }

  resetTimer() {
    clearInterval(this.timerVal);
    this.setState({ timer: 0 });
  }

  render() {
    return (
      <div>
        <h1>Timer : {this.state.timer}</h1>
        <button onClick={() => this.startTimer()}>Start</button>
        <button onClick={() => this.stopTimer()}>Stop</button>
        <button onClick={() => this.resetTimer()}>Clear</button>
      </div>
    );
  }
}

export default StopWatch;
