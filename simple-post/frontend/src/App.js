import React, { Component, Fragment } from 'react';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      page: 1
    };

    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
  }

  fetchPosts() {
    const myheaders = new Headers();
    myheaders.append('pesto-password','darth vader');
    fetch(`http://localhost:3001/posts/${this.state.page}`,{headers: myheaders})
    .then(response => response.json())
    .then(res => this.setState({posts: res.data}));
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handlePrevClick() {
    let value = this.state.page;
    localStorage.setItem(`${this.state.page}`, `${this.setState({page: value --})}`);
    this.fetchPosts();
  }

  handleNextClick() {
    let value = this.state.page;
    localStorage.setItem(`${this.state.page}`, `${this.setState({page: value ++})}`);
    this.fetchPosts();
  }

  render() {
    console.log(this.state.posts);
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>
          Previous
        </button>
        <button onClick={this.handleNextClick}>
          Next
        </button> {this.state.page}
        <div>
          {this.state.posts.map((post) => {
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
