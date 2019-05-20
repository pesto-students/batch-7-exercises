import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Post from './components/Post';
import SinglePost from './components/SinglePost';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  state = {
    page: 1,
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    const { page } = this.state;
    const headers = new Headers();
    headers.append('pesto-password', 'darth vader');
    const init = {
      method: 'GET',
      headers
    };

    const url = `http://localhost:3001/posts/${page}`;
    const request = new Request(url);
    fetch(request, init)
      .then(response => response.json())
      .then(jsonData => this.setState({ posts: jsonData.data }))
      .catch(err => console.log(err));
  }

  handlePrevClick() {
    const { page } = this.state;
    if (page > 1) {
      this.setState({ page: page - 1 }, () => {
        this.fetchPosts();
      });
    }
  }

  handleNextClick() {
    const { page } = this.state;
    this.setState({ page: page + 1 }, () => {
      this.fetchPosts();
    });
  }

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Route
          exact
          path="/"
          render={props => (
            <div {...props}>
              <h2>Posts</h2>
              <hr />
              <br />
              <button type="button" onClick={this.handlePrevClick}>
                Previous
              </button>
              <button type="button" onClick={this.handleNextClick}>
                Next
              </button>
              <div>
                {posts.map(post => {
                  return (
                    <Fragment key={post.id}>
                      <Post post={post} />
                      <hr />
                    </Fragment>
                  );
                })}
              </div>
            </div>
          )}
        />
        <Route path="/post/:id" render={props => <SinglePost {...props} />} />
      </Fragment>
    );
  }
}

export default App;
