import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './../redux/actions';

class GithubRepos extends React.Component {
  state = {
    username: ''
  };

  setUsername(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    const { repos, error, loading, fetchGithubRepos } = this.props;
    const { username } = this.state;

    return (
      <div>
        <input type="text" onChange={event => this.setUsername(event)} value={username} />
        <button onClick={() => fetchGithubRepos(username)}>Get Repos</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {error ? (
              <p>{error}</p>
            ) : (
              <ul>{repos ? repos.map(repo => <li key={repo.id}>{repo.name}</li>) : null}</ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    repos: state.repos,
    loading: state.loading,
    error: state.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchGithubRepos: username => dispatch(actionCreators.fetchRepos(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubRepos);
