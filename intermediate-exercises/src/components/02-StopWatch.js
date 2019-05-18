import React, { Component } from 'react';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerRunning: false,
      timer: 0
    };
    this.intervalId = null;
    this.incrementTimer = this.incrementTimer.bind(this);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  incrementTimer() {
    this.setState(state => {
      return { ...state, timer: state.timer + 1 };
    });
  }

  startTimer() {
    this.setState({ timerRunning: true });
    this.intervalId = setInterval(this.incrementTimer, 1000);
  }

  clearTimer() {
    this.stopTimer();
    this.setState({ timer: 0 });
  }

  stopTimer() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.setState({ timerRunning: false });
    }
  }

  render() {
    const { timerRunning, timer } = this.state;
    const buttonState = !timerRunning ? 'Start' : 'Stop';
    const buttonOnClickHandler = !timerRunning ? 'startTimer' : 'stopTimer';
    return (
      <div>
        Stop Watch
        <p>{timer}</p>
        <button type="button" onClick={() => this[buttonOnClickHandler]()}>
          {buttonState}
        </button>
        <button type="button" onClick={() => this.clearTimer()}>
          Clear
        </button>
      </div>
    );
  }
}

export default StopWatch;
