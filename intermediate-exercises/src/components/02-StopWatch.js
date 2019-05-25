import React, { Component } from "react";

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
          <span>{time} ms</span>
        </p>
        <button className="button" onClick={this.startTimer}>
          Start{" "}
        </button>
        <button className="button" onClick={this.stopTimer}>
          Stop{" "}
        </button>
        <button className="button" onClick={this.clearTimer}>
          Clear{" "}
        </button>
      </div>
    );
  }
}

export default StopWatch;
