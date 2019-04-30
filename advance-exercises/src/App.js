import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import routes from './routes';
import './App.css';

const App = () => (
  <Router>
    <React.Fragment>
      <ul style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
        <li>
          <NavLink to="/01" activeClassName="link--active">Compound Components</NavLink>
        </li>
        <li>
          <NavLink to="/02" activeClassName="link--active">Context</NavLink>
        </li>
        <li>
          <NavLink to="/03" activeClassName="link--active">Higher Order</NavLink>
        </li>
        <li>
          <NavLink to="/04" activeClassName="link--active">Optimize Render</NavLink>
        </li>
      </ul>
      <hr />
      {routes.map(route => (
        <Route
          path={route.path}
          render={props => (
            <route.component {...props} routes={route.routes} />
          )}
        />
      ))}
    </React.Fragment>
  </Router>
);

export default App;
