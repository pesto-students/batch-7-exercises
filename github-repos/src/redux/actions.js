import axios from 'axios';

export const FETCH_GITHUB_REPOS = 'FETCH_GITHUB_REPOS';
export const ADD_GITHUB_REPOS = 'ADD_GITHUB_REPOS';
export const NOTIFY_ERROR = 'NOTIFY_ERROR';
export const SET_LOADING_REPOS = 'SET_LOADING_REPOS';

export function setLoadingRepos() {
  return { type: SET_LOADING_REPOS };
}

export function addRepos(repos) {
  return { type: ADD_GITHUB_REPOS, repos };
}

export function notifyError(errorMessage) {
  return { type: NOTIFY_ERROR, errorMessage };
}

export function fetchRepos(username) {
  return dispatch => {
    dispatch(setLoadingRepos());

    if (username.length === 0) {
      return dispatch(notifyError('Username cannot be empty'));
    }
    const githubUrl = `https://api.github.com/users/${username}/repos`;
    return axios
      .get(githubUrl)
      .then(response => {
        const repos = response.data.map(repo => {
          return {
            id: repo.id,
            name: repo.name
          };
        });
        dispatch(addRepos(repos));
      })
      .catch(() => {
        dispatch(notifyError(`Cannot find this username on Github: ${username}`));
      });
  };
}
