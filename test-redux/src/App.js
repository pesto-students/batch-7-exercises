import React, { Component } from 'react';

import './styles/App.css';
import Todo from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Welcome to React</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

export default App;
