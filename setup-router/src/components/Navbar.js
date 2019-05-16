import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
}
