import React, { Component } from 'react';
import '../styles/TodoList.css';

// Note: Don't forget prop validation
class TodoList extends Component {
  state = {
    input: '',
  };
  render() {
    return (
      <div className="todos--container">
        <h1 className="todos--h1">Todos</h1>
        <input type="text" placeholder="Enter Todo" value={this.state.input} />
        <ul>
          <li />
        </ul>
        <button className="todo--button">Add Todo</button>
      </div>
    );
  }
}

export default TodoList;
