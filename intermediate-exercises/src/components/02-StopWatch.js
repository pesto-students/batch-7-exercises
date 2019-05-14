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
      timerRunning: false,
      timer: 0
    };
  }

  intervalId = null;

  incrementTimer() {
    let currentTime = this.state.timer;
    this.setState({ timer: ++currentTime });
  }

  startTimer() {
    this.setState({ timerRunning: true });
    intervalId = setInterval(this.incrementTimer, 1000);
  }

  clearTimer() {
    this.setState({ timer: 0 });
  }

  stopTimer() {
    if (intervalId !== null) {
      clearInterval(intervalId);
    }
  }

  render() {
    const { timerRunning } = this.state;
    const buttonState = timerRunning ? Start : Stop;
    const buttonOnClickHandler = timerRunning ? startTimer : stopTimer;
    return <div>
    Stop Watch
    <button type="button" onClick={() => buttonOnClickHandler()}>{buttonState}</button>
    <button type="button" onClick={() => this.clearTimer()}>Clear</button>
    </div>;
  }
}

export default StopWatch;
