import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { repository: state.repository };
};

class GithubRepo extends React.Component {
  constructor() {
    super();
    this.state = {
      repository: [],
      userName: ""
    };
  }
  getRepositoryList = event => {
    const { userName } = this.state;
    this.props.getRepository({ userName });
    this.setState({ userName: "" });
  };
  handleChange = event => {
    this.setState({ [event.target.id]: [event.target.value] });
  };
  render() {
    const { userName } = this.state;
    return (
      <div>
        <form onSubmit={this.getRepositoryList}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter Git Username"
            value={userName}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Get Git Repo" />
        </form>
        <h6>Repo List</h6>
        <ul />
      </div>
    );
  }
}

let reposList = connect(mapStateToProps)(GithubRepo);

export default reposList;
