import React, { Component } from "react";
import axios from "axios";
import Constants from "./../redux/constants";
import { connect } from "react-redux";
class GitHubForm extends Component {
  constructor() {
    super();
    this.state = { formInput: { username: "" } };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleInputChange = function(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(prevState => {
      return {
        formInput: {
          ...prevState.formInput,
          [name]: value
        }
      };
    });
  };

  handleOnSubmit = function(event) {
    console.log("data :", this.state.formInput);
    console.log("get data");
    axios
      .get(
        `https://api.github.com/users/${this.state.formInput["username"]}/repos`
      )
      .then(result =>
        this.props.saveGithubRepos({
          repos: result.data,
          username: this.state.formInput["username"]
        })
      );
  };
  render() {
    const { formInput } = this.state;
    return (
      <div>
        <label>Github Username:</label>{" "}
        <input
          type="text"
          name="username"
          value={formInput["username"]}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleOnSubmit}>Fetch Projects</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveGithubRepos: state =>
      dispatch({
        type: Constants.SAVE_GITHUB_REPOS,
        payload: { username: state.username, repos: state.repos }
      })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GitHubForm);
