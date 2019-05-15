import React, { Component } from 'react';

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
      time: 0,
      isTimerOn: false,
    }
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isTimerOn: true,
    }),
    this.timer = setInterval(() => {
        this.setState({
          time: this.state.time + 1,
        });
      }, 1000)
  }
  stopTimer() {
    this.setState({
      isTimerOn: false,
    });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({
      time : 0,
      isTimerOn : false,
    });
    clearInterval(this.timer);
  }

  render() {
    const { time, isTimerOn } = this.state;
    return (
      <div>
        <h3> {time} </h3>
        <button type="button" onClick={isTimerOn ? this.stopTimer : this.startTimer}> {isTimerOn ? 'Stop Time' : 'Start Timer'}</button>
        <button type="button" onClick={this.resetTimer} > Reset</button>
      </div>
    );
  }
}

export default StopWatch;
