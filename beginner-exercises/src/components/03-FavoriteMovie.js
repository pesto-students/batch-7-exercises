import React, { Component } from "react";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "" };

    this.onMovieChange = this.onMovieChange.bind(this);
  }

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    const favoriteMovieName = event.target.value;
    this.setState({ movie: favoriteMovieName });
  }

  render() {
    let displayMovieText = "";
    if (this.state.movie.length === 0) {
      displayMovieText = <p>Hey there. Enter your favorite movie.</p>;
    } else {
      displayMovieText = (
        <p>
          My favorite movie is <span style={{ color: "blue" }}>{this.state.movie}</span>
        </p>
      );
    }
    return (
      <div>
        {displayMovieText}
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
