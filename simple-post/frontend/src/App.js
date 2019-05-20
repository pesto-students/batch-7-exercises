import React, { Component, Fragment } from "react";

import Post from "./components/Post";
import "./App.css";

class App extends Component {
  state = {
    posts: []
  };

  apiUrl = "http://localhost:3001/posts/:page";
  componentDidMount() {
    this.getPost();
  }

  getPost = _ => {
    let fetchData = {
      method: "GET",
      headers: new Headers({ "pesto-password": "darth vader" })
    };
    fetch(this.apiUrl, fetchData)
      .then(response => {
        console.log(response);
        // if (response.data) {
        //   this.setState({ posts: response.data });
        // }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ posts: [data] });
      });
  };

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
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
