import React, { Component, Fragment } from "react";

import Post from "./components/Post";
import "./App.css";
import * as Constants from "./constants.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.getLocalStoragePageNumber = this.getLocalStoragePageNumber.bind(this);
    this.setLocalStoragePageNumber = this.setLocalStoragePageNumber.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);

    if (!this.getLocalStoragePageNumber()) {
      this.setLocalStoragePageNumber(1);
    }
  }

  getLocalStoragePageNumber = function() {
    if (localStorage.getItem("page")) {
      return parseInt(localStorage.getItem("page"));
    }
    return null;
  };
  setLocalStoragePageNumber = function(page) {
    localStorage.setItem("page", page);
  };

  handleNextClick = function() {
    if (this.getLocalStoragePageNumber() < 10) {
      this.setLocalStoragePageNumber(this.getLocalStoragePageNumber() + 1);
      this.setState(
        { page: this.getLocalStoragePageNumber() },
        this.fetchPosts()
      );
    }
  };

  handlePrevClick = function() {
    if (this.getLocalStoragePageNumber() > 1) {
      this.setLocalStoragePageNumber(this.getLocalStoragePageNumber() - 1);
      this.setState(
        { page: this.getLocalStoragePageNumber() },
        this.fetchPosts()
      );
    }
  };
  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const header = new Headers();
    header.append("pesto-password", Constants.headers["pesto-password"]);
    fetch(`http://localhost:3001/posts/${this.getLocalStoragePageNumber()}`, {
      headers: header
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button
          onClick={this.handlePrevClick}
          disabled={this.getLocalStoragePageNumber() === 1}
        >
          Previous
        </button>
        <button
          onClick={this.handleNextClick}
          disabled={this.getLocalStoragePageNumber() === 10}
        >
          Next
        </button>
        <label> Page Number :</label> {this.getLocalStoragePageNumber()}
        <div>
          {this.state.posts.map(post => {
            return (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
