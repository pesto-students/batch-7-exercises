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
import throttledGetAddressFromCoords from './utils/getAddressFromCoords';
class GeoAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ''
    }
    this.getAddress = this.getAddress.bind(this);
  }
  componentDidMount() {
    this.getAddress();
  }
  getAddress() {
    const latitude = this.props.latitude;
    const longitude = this.props.longitude;
    throttledGetAddressFromCoords(latitude, longitude).then((address) => {
      console.log(address);
      this.setState({
        address: address,
      });
    });
  }

  render() {
    const { address } = this.state;
    return (
      <h2>{this.props.addr(address)}</h2>
    )
  }
}
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
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
    const { error, coords } = this.state;
    return (
      error ? this.props.error(error) : this.props.position(coords.latitude, coords.longitude)
    )
  }

}
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        <GeoPosition position={(lat, long) => (
          <div>
          <dl>
            <dt>Latitude</dt>
            <dd>{lat || <p>create a loader and show here...</p>}</dd>
            <dt>Longitude</dt>
            <dd>{long || <p>create a loader and show here...</p>}</dd>
          </dl> 
          {(lat!== null && long!==null) ? 
          (<GeoAddress latitude={lat} longitude={long} addr={(address) => (
            <h1>{address} </h1>
          )} ></GeoAddress>) : ' '}
         </div> 
        )} error={err => (<div>Error: {err.message}</div>)}
        >

        </GeoPosition>
      </div>
    );
  }
}

export default App;
