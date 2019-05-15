//[WIP]:

import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import axios from 'axios';


 /*
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
 // axios.get('http://api/github.com/users/'+ this.state.username +'/repos').then((data) => console.log(data)).catch((err) => console.log(err));
  return (
    <ul>
      {/* Task: The list of repos here */}
    </ul>
  );
}

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {

};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.getUserName = this.getUserName.bind(this);
    this.fetchGitRepos = this.fetchGitRepos.bind(this);
  }

  getUserName(event) {
    this.setState({ username: event.target.value });
    }

    fetchGitRepos () {
      axios.get('https://api.github.com/users/' + this.state.username +'/repos')
      .then((res) => console.log(res.data))
      .then((r) => console.log(r));
    }

  render() {
    return (
      <div>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.getUserName}
        />
        <button
          onClick={this.fetchGitRepos}
        >
          Get Repos
        </button>
        {/* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */}
          <GithubRepos />
      </div>
    );
  }
}

export default UsernameForm;
