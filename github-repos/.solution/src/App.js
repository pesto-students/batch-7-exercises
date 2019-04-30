import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';

const makeURL = (username) => `https://api.github.com/users/${username}/repos`;

const addRepos = (repos) => ({
  type: 'ADD_REPOS',
  repos
});

const isLoading = () => ({
  type: 'IS_LOADING'
});

const successActionCreator = () => ({
  type: 'SUCCESS'
});

const hasError = () => ({ type: 'HAS_ERROR' })

const fetchRepos = (username) => (dispatch) => {
  dispatch(isLoading());
  fetch(makeURL(username))
    .then(res => res.json())
    .then(data => {
      const repos = data.map(obj => obj.name);
      if (repos.length === 0) {
        dispatch(successActionCreator());
        dispatch(hasError())
      } else {
        dispatch(addRepos(repos));
        dispatch(successActionCreator());
      }
    }).catch(err => {
    })
}


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(evt) {
    const { value: username } = evt.target;
    this.setState({ username });
  }

  render() {
    const { username } = this.state;
    const { fetchRepos, repos, isLoading, hasError } = this.props;

    if (hasError) {
      return <h1>Error</h1>;
    }
    return <div>
      <label>
        Github Username: <input onChange={this.onChange} value={username} />
      </label>
      <button onClick={() => fetchRepos(username)} type="button"> Get Repos </button>
      <h1>Your Repos</h1>
      {
        isLoading ? (
          <h1>Loading Repos ....</h1>
        ) : (
          <ul>
            { repos.map(el => <li key={el}>{el}</li>)}
          </ul>
        )
      }
    </div>
  }
}

const mapStateToProps = state => ({
  repos: state.repos,
  isLoading: state.loadingRepos,
  hasError: state.hasError
});

const mapDispatchToProps = {
  fetchRepos,
}

const connectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default connectedApp;
