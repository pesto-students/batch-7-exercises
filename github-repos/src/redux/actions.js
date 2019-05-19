import { GET_GITREPO_LIST } from "./constants";
import axios from "axios";

function getRepository(repos) {
  return { type: "GET_GITREPO_LIST", payload: { repositoryList: repos } };
}

function fetchRepositoryList(username) {
  const gitUserUrl = "https://api.github.com/users/" + username + "/repos";
  axios
    .get(gitUserUrl)
    .then(response => {
      if (response) {
        let repoList = response.data.map(repoDetails => {
          name: repoDetails.name;
          id: repoDetails.id;
        });
        getRepository(repoList);
      }
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
    });
}
