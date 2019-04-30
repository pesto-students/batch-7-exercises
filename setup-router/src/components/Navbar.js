import React, { Component } from 'react';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="active">Home</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    );
  }
}
