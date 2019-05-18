import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const GithubRepos = ({ repos }) => {
  return (
    <ul>
      {repos.map(repo => (
        <li key={repo.id}>{repo.name}</li>
      ))}
    </ul>
  );
};

GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: []
    };
  }

  fetchGithubRepos() {
    const { username } = this.state;
    if (username === '') {
      alert(`User id cannot be empty.`);
    } else {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(res => res.data)
        .then(data => {
          const repos = data.map(repo => {
            return { id: repo.id, name: repo.name };
          });
          this.setState({ repos });
        })
        .catch(() => alert(`You entered an invalid user id: ${username}`));
    }
  }

  updateUsername({ target }) {
    this.setState({ username: target.value.toLowerCase() });
  }

  render() {
    const { username, repos } = this.state;
    const isRepoListEmpty = repos.length === 0;
    return (
      <div>
        <input
          type="text"
          name="username"
          value={username}
          onChange={event => this.updateUsername(event)}
        />
        <button type="button" onClick={() => this.fetchGithubRepos()}>
          Get Repos
        </button>
        {isRepoListEmpty ? null : <GithubRepos repos={repos} />}
      </div>
    );
  }
}

export default UsernameForm;
