/* eslint-disable react/jsx-filename-extension */
/**
  Exercise:

  - Refactor App by creating a new component named `<GeoPosition>`
  - <GeoPosition> should use a child render callback that passes
    to <App> the latitude and longitude state
  - When you're done, <App> should no longer have anything but
    a render method

  Part 2:
  - Now create a <GeoAddress> component that also uses a render
    callback with the current address. You will use
    `getAddressFromCoords(latitude, longitude)` to get the
    address, it returns a promise.
  - You should be able to compose <GeoPosition> and <GeoAddress>
    beneath it to naturally compose both the UI and the state
    needed to render it
  - Make sure <GeoAddress> supports the user moving positions

  There is an image of the end result of this exercise in the root of this directory
  by the name - `render_props.png`. Good luck!

  NOTE: It is important to do this exercise using render props.
  https://reactjs.org/docs/render-props.html
 */

/* eslint-disable react/no-multi-comp */

import React from 'react';
// import PropTypes from 'prop-types';

// import getAddressFromCoords from './utils/getAddressFromCoords';

class GeoPosition extends React.Component {
  constructor() {
    super();
    this.state = {
      coords: {
        latitude: null,
        longitude: null,
      },
      error: null,
    };
  } 

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      (position) => {
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
        });
      },
      (error) => {
        this.setState({ error });
      },
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }

  render() {
    return (
      {this.state.error ? (
        <div>Error: {this.state.error.message}</div>
      ) : (
        <dl>
          <dt>Latitude</dt>
          <dd>{this.state.coords.latitude || <p>create a loader and show here...</p>}</dd>
          <dt>Longitude</dt>
          <dd>{this.state.coords.longitude || <p>create a loader and show here...</p>}</dd>
        </dl>
      )}
    )
  }
}

class App extends React.Component {
 

  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        
      </div>
    );
  }
}

export default App;
