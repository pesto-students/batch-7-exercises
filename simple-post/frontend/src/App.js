import React, { Component, Fragment } from "react";

import Post from "./components/Post";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.fetchPosts = this.fetchPosts.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  componentDidMount() {
    this.fetchPosts(1);
  }

  fetchPosts(pageNumber) {
    fetch(`http://localhost:3001/posts/${pageNumber}`, {
      headers: new Headers({
        "pesto-password": "darth vader"
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        localStorage.setItem("pageNumber", parseInt(pageNumber,10));
        this.setState({
          posts: data.data
        });
      })
      .catch(error => console.log(error));
  }

  handlePrevClick() {
    const pageNumber = parseInt(localStorage.getItem("pageNumber"),10);
    if (pageNumber === 1) {
      return this.fetchPosts(1);
    }
    localStorage.setItem('pageNumber', pageNumber - 1);
    return this.fetchPosts(pageNumber - 1);
  }

  handleNextClick() {
    const pageNumber = parseInt(localStorage.getItem("pageNumber"));
    localStorage.setItem('pageNumber', pageNumber + 1);
    return this.fetchPosts(pageNumber + 1);
  }
  render() {
    return (
      <Router>
        
      </Router>
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
