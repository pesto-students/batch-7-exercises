import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

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
      {repos.map(repoName => (
        <li key={repoName}>{repoName}</li>
      ))}
    </ul>
  );
};

// Task: Open the console in the browser. There will be a warning
// about incorrect prop type for user.
// Define the correct prop type for the prop `repos`
GithubRepos.propTypes = {};

/* eslint-disable react/no-multi-comp */
class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "amitbadala",
      repos: []
    };
  }

  getGithubRepoByUser() {
    const gitUserUrl =
      "https://api.github.com/users/" + this.state.username + "/repos";
    axios
      .get(gitUserUrl)
      .then(response => {
        if (response) {
          let repoNames = response.data.map(repoDetails => repoDetails.name);
          this.setState({ repos: repoNames });
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <div>
        <input type="text" name="username" />
        <button onClick={() => this.getGithubRepoByUser()}>Get Repos</button>
        <GithubRepos repos={this.state.repos} />
      </div>
    );
  }
}

export default UsernameForm;
