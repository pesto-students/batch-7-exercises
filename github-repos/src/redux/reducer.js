import * as actions from './actions';

const initialState = {
  repos: [],
  loading: false,
  error: false
};

function reducer(state = initialState, action) {
  if (action.type === actions.ADD_GITHUB_REPOS) {
    return {
      ...state,
      repos: action.repos,
      error: false,
      loading: false
    };
  }
  if (action.type === actions.SET_LOADING_REPOS) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === actions.NOTIFY_ERROR) {
    return {
      ...state,
      error: action.errorMessage,
      loading: false
    };
  }
  return state;
}

export default reducer;
