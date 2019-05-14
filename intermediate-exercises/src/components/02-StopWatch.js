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
      time : 0,
      isTimerOn : true,
    }
    this.startTimer = this.startTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isTimerOn : true,
    }),
    setInterval(() => {
      this.setState({
        time : this.state.time + 1,
      });
    })
  }
  render() {
    const {time} = this.state.time;
    return (
     <div>
       <h3> time </h3>
       <button type= "button" onClick={this.startTimer}></button>
     </div>
    );
  }
}

export default StopWatch;
