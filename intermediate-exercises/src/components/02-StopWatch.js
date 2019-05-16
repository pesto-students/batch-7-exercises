/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

const timeTextStyle = {
  fontSize: '3em',
};

const actionButtonStyle = {
  padding: '24px',
  margin: '8px',
  fontSize: '1em',
  color: '#ffffff',
  borderRadius: '16px',
};

const startButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: '#4caf50',
};

const stopButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: '#f44336',
};

const clearButtonStyle = {
  ...actionButtonStyle,
  backgroundColor: '#546e7a',
};

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      lapsedTime: 0,
      offset: 0,
    };

    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  start() {
    this.setState(
      {
        isRunning: true,
        offset: Date.now(),
      },
      this.updateTime,
    );
  }

  stop() {
    this.setState({
      isRunning: false,
    });
  }

  updateTime() {
    const { offset, lapsedTime } = this.state;
    const timeNow = Date.now();
    const timePassed = timeNow - offset;

    this.setState(
      {
        offset: timeNow,
        lapsedTime: lapsedTime + timePassed,
      },
      () => {
        const { isRunning } = this.state;
        if (isRunning) setTimeout(this.updateTime, 10);
      },
    );
  }

  transformedTime() {
    const { lapsedTime } = this.state;
    const time = new Date(lapsedTime);
    let minute = time.getUTCMinutes().toString();
    let seconds = time.getUTCSeconds().toString();
    let milliSeconds = time.getUTCMilliseconds().toString();

    if (minute.length < 2) minute = `0${minute}`;
    if (seconds.length < 2) seconds = `0${seconds}`;

    while (milliSeconds.length < 3) {
      milliSeconds = `0${milliSeconds}`;
    }

    return `${minute} : ${seconds} : ${milliSeconds}`;
  }

  handleStartStop() {
    const { isRunning } = this.state;
    if (isRunning) {
      this.stop();
    } else {
      this.start();
    }
  }

  handleClear() {
    this.setState({
      isRunning: false,
      lapsedTime: 0,
    });
  }

  render() {
    const isItRunning = () => {
      const { isRunning } = this.state;
      return isRunning;
    };

    return (
      <div>
        <h2>Stop Watch</h2>
        <div>
          <h1 style={timeTextStyle}>{this.transformedTime()}</h1>
        </div>
        <div className="actions-containers">
          <button
            type="button"
            style={isItRunning() ? stopButtonStyle : startButtonStyle}
            onClick={this.handleStartStop}
          >
            {isItRunning() ? 'Stop' : 'Start'}
          </button>

          <button
            type="button"
            style={clearButtonStyle}
            onClick={this.handleClear}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default StopWatch;
