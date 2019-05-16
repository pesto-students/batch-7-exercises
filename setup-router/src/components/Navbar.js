import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";

import "../styles/App.css";

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        {/* <li className="active">Home</li> 
        <li>About Us</li>
        <li>Contact</li> */}
        <Link to="/Home/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact/">Contact</Link>
      </ul>
    );
  }
}
