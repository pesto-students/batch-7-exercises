/* eslint-disable react/jsx-filename-extension */
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Post from './components/Post';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageNumber: 1,
      posts: [],
    };

    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.fetchPagePosts = this.fetchPagePosts.bind(this);
    this.getStorageKeyOfPostPaging = this.getStorageKeyOfPostPaging.bind(this);
    this.handleData = this.handleData.bind(this);
    this.reflectNewData = this.reflectNewData.bind(this);
  }

  componentDidMount() {
    this.fetchPagePosts();
  }

  getStorageKeyOfPostPaging() {
    const { pageNumber } = this.state;
    return `PostOfPage: ${pageNumber}`;
  }

  fetchPagePosts() {
    const { pageNumber } = this.state;
    const { localStorage } = window;
    const storageKey = this.getStorageKeyOfPostPaging();

    const storageData = JSON.parse(localStorage.getItem(storageKey));
    if (storageData) {
      console.log('Storage data loaded!', storageData);

      this.handleData(storageData);
    } else {
      console.log('Fetching new data!');

      fetch(`http://localhost:3001/posts/${pageNumber}`, {
        method: 'get',
        headers: new Headers({
          'pesto-password': 'darth vader',
        }),
      })
        .then(data => data.json())
        .then(({ data }) => {
          this.handleData(data);
          this.reflectNewData(data);
        });
    }
  }

  handleData(data) {
    this.setState({ posts: data });
  }

  reflectNewData(data) {
    const { pageNumber } = this.state;
    const { localStorage } = window;
    localStorage.setItem(`PostOfPage: ${pageNumber}`, JSON.stringify(data));
  }

  handlePrevClick() {
    const { pageNumber } = this.state;
    const requiredPageNumber = pageNumber > 0 ? pageNumber - 1 : 0;
    this.setState(
      {
        pageNumber: requiredPageNumber,
      },
      () => this.fetchPagePosts(),
    );
  }

  handleNextClick() {
    const { pageNumber } = this.state;
    this.setState(
      {
        pageNumber: pageNumber + 1,
      },
      () => this.fetchPagePosts(),
    );
  }

  render() {
    return (
      <div>
        <h2>Posts</h2>
        <hr />
        <br />
        <button onClick={this.handlePrevClick}>Previous</button>
        <button onClick={this.handleNextClick}>Next</button>
        <div>
          <Router>
            {this.state.posts.map(post => (
              <Fragment key={post.id}>
                <Post post={post} />
                <hr />
              </Fragment>
            ))}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
