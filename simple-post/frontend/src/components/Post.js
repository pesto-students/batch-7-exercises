import React from 'react';
import PropTypes from 'prop-types';


const Post = ({ post }) => {
  return (
    <div key={post.id}>
      <h4>{post.id}</h4>
      <div>Title: {post.title}</div>
    </div>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
