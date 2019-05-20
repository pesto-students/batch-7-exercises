import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  state = {
    post: {}
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    const headers = new Headers();
    headers.append('pesto-password', 'darth vader');
    const init = {
      method: 'GET',
      headers
    };
    const url = `http://localhost:3001/post/${id}`;
    const request = new Request(url);
    fetch(request, init)
      .then(response => response.json())
      .then(jsonData => this.setState({ posts: jsonData.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props);
    const { post } = this.state;
    return (
      <div>
        {post ? (
          <React.Fragment>
            <h4>{post.id}</h4>
            <div>
              Title: {post.title}
              {post.body ? <p>{post.body}</p> : null}
              {post.userId ? <p>User ID: {post.userId}</p> : null}
            </div>
          </React.Fragment>
        ) : null}
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
