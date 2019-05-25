import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

import routes from "./routes";
import "./App.css";

const App = () => (
  <Router>
    <React.Fragment>
      <ul
        className="nav"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          listStyle: "none"
        }}
      >
        <li>
          <NavLink to="/01" activeClassName="link--active">
            Life Cycle
          </NavLink>
        </li>
        <li>
          <NavLink to="/02" activeClassName="link--active">
            Stop Watch
          </NavLink>
        </li>
        <li>
          <NavLink to="/03" activeClassName="link--active">
            Fetch Github Data
          </NavLink>
        </li>
        <li>
          <NavLink to="/04" activeClassName="link--active">
            Render Props
          </NavLink>
        </li>
        <li>
          <NavLink to="/05" activeClassName="link--active">
            Snake Game
          </NavLink>
        </li>
      </ul>
      <hr />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          render={props => <route.component {...props} routes={route.routes} />}
        />
      ))}
    </React.Fragment>
  </Router>
);

export default App;
