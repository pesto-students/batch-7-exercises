import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom",
const PostDetails({post}) => {
    return (
        <div key={post.id}>
        <h4>{post.id}</h4>
        <div>Title: {post.title}</div>
        <div>Body : {post.body}</div>
      </div>
    )
} 

export const PostDetails;
