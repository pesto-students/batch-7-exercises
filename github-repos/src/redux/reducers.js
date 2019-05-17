import { GET_GITREPO_LIST } from "./constants";

const initialState = {
  repository: []
};
function rootReducer(state = initialState, action) {
  if (action.type === GET_GITREPO_LIST) {
    return Object.assign({}, state, {
      repository: state.repository.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;
