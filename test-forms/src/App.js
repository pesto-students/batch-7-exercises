import React, { Component } from 'react';

import Form from './components/Form';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <Form />
      </div>
    );
  }
}

export default App;
