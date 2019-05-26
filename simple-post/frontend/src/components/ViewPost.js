import React from "react";
import * as Constants from "./constants.js";

class ViewPost {
  constructor(props) {
    super(props);
    this.state = { post: { title: "", body: "" } };
    this.fetchPost = this.fetchPost.bind(this);

    const request = window.indexedDB.open("Posts", 3);
    request.onerror = function(event) {
      console.log("Database error: " + event.target.errorCode);
    };
    request.onsuccess = function(event) {
      this.db = event.target.result;
    };
  }

  componentDidMount() {
    fetchPost();
  }

  fetchPost() {
    const header = new Headers();
    header.append("pesto-password", Constants.headers["pesto-password"]);
    fetch(`http://localhost:3001/post/${this.props.match.params.id}`, {
      headers: header
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ posts: res.data });
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
}
