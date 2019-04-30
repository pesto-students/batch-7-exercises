import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const intialObject = {
  repos: [],
  loadingRepos: false,
  hasError: false,
}

const rootReducer = (state = intialObject, action) => {
  switch(action.type) {
    case 'ADD_REPOS': {
      return { ...state, repos: action.repos }
    }
    case 'IS_LOADING': {
      return { ...state, loadingRepos: true };
    }
    case 'SUCCESS': {
      return { ...state, loadingRepos: false };
    }
    case 'HAS_ERROR': {
      return {...state, hasError: true };
    }
    default:
      return state;
  }
  return state;
} 

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export { store };