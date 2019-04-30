import React, { Component } from 'react';

import '../styles/Form.css';
// import api from '../api';

export default class Form extends Component {
  state = {
    name: '',
  }
  render() {
    return (
      <form data-testid="addUserForm" onSubmit={this.handleSubmit}>
        <h2>Request Information</h2>
        <input data-testid="name" type="text" placeholder="Name" value={this.state.name} />
        <div>
          <input data-testid="checked" type="checkbox" />
          <p data-testid="promotionsP" className="promotions">Receive Promotions</p>
        </div>
        <button type="submit" data-testid="submitButton">Submit</button>
      </form>
    );
  }
}
