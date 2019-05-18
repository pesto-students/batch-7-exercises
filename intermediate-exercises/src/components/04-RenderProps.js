/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import getAddressFromCoords from './utils/getAddressFromCoords';

class GeoAddress extends React.Component {
  state = {
    address: ''
  };

  componentDidMount() {
    const { latitude, longitude } = this.props;
    getAddressFromCoords(latitude, longitude)
      .then(res => this.setState({ address: res }))
      .catch(err => this.setState({ address: 'API key is missing' }));
  }

  render() {
    return <div>{this.state.address}</div>;
  }
}

class GeoPosition extends React.Component {
  constructor() {
    super();
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
    return <div>{this.props.render(this.state)}</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Geolocation</h1>
        <GeoPosition
          render={position => {
            return position.error ? (
              <div>
                Error:
                {position.error.message}
              </div>
            ) : (
              <div>
                <dl>
                  <dt>Latitude</dt>
                  <dd>{position.coords.latitude || <p>Loading...</p>}</dd>
                  <dt>Longitude</dt>
                  <dd>{position.coords.longitude || <p>Loading...</p>}</dd>
                </dl>
                <h1>GeoAddress</h1>
                {position.coords.latitude && position.coords.longitude ? (
                  <GeoAddress
                    latitude={position.coords.latitude}
                    longitude={position.coords.longitude}
                  />
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            );
          }}
        />
      </div>
    );
  }
}

export default App;
