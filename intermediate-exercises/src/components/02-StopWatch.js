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
    this.state = { timer: 0, running: false };
    this.incrementTime = this.incrementTime.bind(this);
    this.startWatch = this.startWatch.bind(this);
    this.stopWatch = this.stopWatch.bind(this);
    this.resetWatch = this.resetWatch.bind(this);
  }

  incrementTime () {
    if (this.state.running === true) {
      let currentTime = this.state.timer;
      this.setState({ timer : ++currentTime });
    }
  }

  startWatch() {
    this.setState({ interval: setInterval(this.incrementTime, 1000), running: true});
  }

  stopWatch() {
    clearInterval(this.state.interval);
    this.setState({ running: false});
  }

  resetWatch() {
    clearInterval(this.state.interval);
    this.setState( {running: false, timer: 0});
  }


  
  render() {
    return (
      <div>
        {this.state.timer}
        <button onClick={this.startWatch}> Start Watch</button>
        <button onClick={this.stopWatch}> Stop Watch</button>
        <button onClick={this.resetWatch}> Clear</button>
      </div>
    );
  }
}

export default StopWatch;
