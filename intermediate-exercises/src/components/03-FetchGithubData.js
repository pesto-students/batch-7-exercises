/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const repoListStyle = {
  backgroundColor: '#fffff',
  boxShadow: '3px 5px 5px rgba(0,0,0,0.3)',
  margin: '4px auto',
  border: '1px solid rgba(0,0,0,0.3)',
  padding: '8px',
  maxWidth: '320px',
};

const GithubRepos = ({ repos }) => {
  const listRepos = repos.map(repo => (
    <li style={repoListStyle} key={repo.id}>
      {repo.name}
    </li>
  ));
  return <ul>{listRepos}</ul>;
};

GithubRepos.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })),
};

GithubRepos.defaultProps = {
  repos: [],
};

const getGitRepoURL = username => `https://api.github.com/users/${username}/repos`;

class UsernameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      repos: [],
    };
    this.fetchRepos = this.fetchRepos.bind(this);
    this.handleOnInputChange = this.handleOnInputChange.bind(this);
  }

  fetchRepos() {
    const { username } = this.state;
    axios.get(getGitRepoURL(username))
      .then(({ data }) => this.setState({ repos: data }));
  }

  handleOnInputChange({ target }) {
    this.setState({
      username: target.value,
    });
  }

  render() {
    const { repos } = this.state;
    return (
      <div>
        <input type="text" name="username" onChange={this.handleOnInputChange} />
        <button type="button" onClick={this.fetchRepos}>Get Repos</button>
        <GithubRepos repos={repos} />
      </div>
    );
  }
}

export default UsernameForm;
