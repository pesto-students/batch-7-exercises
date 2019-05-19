import { GET_GITREPO_LIST } from "./constants";

const initialState = {
  repositoryList: []
};
function rootReducer(state = initialState, action) {
  if (action.type === "GET_GITREPO_LIST") {
    return Object.assign({}, state, {
      repositoryList: state.repositoryList.concat(action.payload.repositoryList)
    });
  }
  return state;
}
export default rootReducer;
