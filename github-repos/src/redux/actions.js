import { GET_GITREPO_LIST } from "./constants";

export function getRepository(payload) {
  return { type: GET_GITREPO_LIST, payload };
}
