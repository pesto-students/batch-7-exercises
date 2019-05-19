import React from "react";
import { connect } from "react-redux";
import * as action from "../../redux/actions";

const mapStateToProps = state => {
  return { repositoryList: state.repositoryList };
};

const mapDispatchToProps = dispatch => {
  return {
    getRepository: username => dispatch(action.getRepository(username))
  };
};

class GithubRepo extends React.Component {
  state = {
    userName: ""
  };
  // getRepositoryList = event => {
  //   const { userName } = this.state;
  //   this.props.getRepository({ userName });
  //   // this.setState({ userName: "" });
  // };
  handleChange = event => {
    // console.log(this.state.userName, event.target);
    this.setState({ userName: [event.target.value] });
  };
  render() {
    const { userName } = this.state;
    return (
      <div>
        <form>
          <input
            type="text"
            id="userName"
            placeholder="Enter Git Username"
            value={userName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="submit"
            onClick={(username = this.state.userName) =>
              this.props.getRepository(userName)
            }
            value="Get Git Repo"
          />
        </form>
        <h6>Repo List</h6>
        <ul>
          {/* Task: The list of repos here */}{" "}
          {this.props.repositoryList.map(repos => (
            <li key={repos.id}>{repos.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

let reposList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubRepo);

export default reposList;
