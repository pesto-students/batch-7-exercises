import React, { Component } from 'react';
import axios from 'axios'
// import PropTypes from 'prop-types';
// import axios from 'axios';

/**
 * Axios is a promise based HTTP client for the browser and node.js.
 * Refer to their github page to see how to use it to make HTTP requests.
 * Axios: https://github.com/axios/axios
 *
 * It is best not to fetch data from a server in the `render` method.
 * Any change to the state of a component can cause a re-render of the
 * component. This will likely happen more often than we want.
 * Use the appropriate lifecycle method to make the axios request.
 *
 * Exercise:
 *
 *  Create a `GithubRepos` component that lists all the GitHub repos for a user.
 *  Allow the repos to be provided as a prop.
 *
 *  https://api.github.com/users/{username}/repos
 */
/* eslint-disable react/no-unused-state */
const GithubRepos = ({ repos }) => {
  return (
    <ul>
     {repos.map((name) => (<li> {name} </li>))}
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
    this.fetchRepositories = this.fetchRepositories.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  updateUserName(event) {
    this.setState({
      username: event.target.value,
    })
  }
  fetchRepositories() {
    const { username } = this.state;
    axios.get(`https://api.github.com/users/${username}/repos`)
      .then((response) => {
        console.log(response);
        const repositoriesNames = response.data.map((repo => repo.name));
        console.log(repositoriesNames);
        this.setState({
          repos: repositoriesNames,
        });
      })
      .catch((err) => {
        console.log(err);
      }); 
  }
  render() {
    const {repos} = this.state;
    return (
      <div>
        <input
          type="text"
          name="username"
          onChange={this.updateUserName}
        />
        <button
          onClick= { this.fetchRepositories }
        >
          Get Repos
        </button>
        {/* Task: Display the results here. Use GithubRepos Component.
          It should be a list of repos of the user entered */
          <GithubRepos repos={ repos ? repos : []} ></GithubRepos>
          }
          
      </div>
    );
  }
}

export default UsernameForm;
