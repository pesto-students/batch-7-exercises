import Constants from "./constants";

const githubFormReducer = (state = { username: "", repos: [] }, action) => {
  if (action.type === Constants.SAVE_GITHUB_REPOS) {
    console.log('action', action);
    return {
      ...state,
      username: action.payload.username,
      repos: action.payload.repos
    };
  }
  return state;
};

export default githubFormReducer;
