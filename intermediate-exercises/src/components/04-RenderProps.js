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

import React from "react";
import PropTypes from "prop-types";
import getAddressFromCoords from "./utils/getAddressFromCoords";

const Loader = () => {
  return (
    <p>
      <span>Loading...</span>
    </p>
  );
};
class GeoPosition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        latitude: null,
        longitude: null
      },
      error: null
    };
  }

  componentDidMount() {
    this.geoId = navigator.geolocation.watchPosition(
      position => {
        console.log(position.coords);
        this.setState({
          coords: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        });
      },
      error => {
        this.setState({ error });
      }
    );
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.geoId);
  }
  render() {
    const { error, coords } = this.state;
    return (
      <React.Fragment>
        <h2>Geo Position</h2>
        {error ? (
          <div>Error: {error.message}</div>
        ) : (
          this.props.position(coords.latitude, coords.longitude)
        )}
      </React.Fragment>
    );
  }
}

class GeoAddress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };
    this.getAddress = this.getAddress.bind(this);
  }

  componentDidMount() {
    this.getAddress();
  }

  getAddress() {
    getAddressFromCoords(this.props.latitude, this.props.longitude).then(
      response => {
        console.log(response);
      }
    );
  }

  render() {
    return <div>{this.props.address(this.state.address)}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        <GeoPosition
          position={(latitude, longitude) => (
            <React.Fragment>
              <dl>
                <dt>Latitude</dt>
                <dd>{latitude || <Loader />}</dd>
                <dt>Longitude</dt>
                <dd>{longitude || <Loader />}</dd>
              </dl>
              {latitude !== null && longitude !== null ? (
                <GeoAddress
                  latitude={latitude}
                  longitude={longitude}
                  address={address => (
                    <div>
                      <h2>Geo Address Composition</h2>
                      <p>{address}</p>
                    </div>
                  )}
                />
              ) : (
                " "
              )}
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default App;
