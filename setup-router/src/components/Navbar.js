import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "../styles/App.css";

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li>
          <NavLink exact to="/Home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/About" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
