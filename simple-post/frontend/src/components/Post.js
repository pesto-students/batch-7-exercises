/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const postTitleStyle = {
  display: 'inline-block',
};

const Post = ({ post, history }) => (
  <div
    key={post.id}
    role="button"
    onClick={() => history.push(`post/${post.id}`)}
    onKeyPress={() => history.push(`post/${post.id}`)}
    tabIndex="0"
  >
    <h4>{post.id}</h4>
    <div style={postTitleStyle}>
      <h3>Title: {post.title}</h3>
    </div>
  </div>
);

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(Post);
