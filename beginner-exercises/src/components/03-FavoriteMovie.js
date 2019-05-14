import React, { Component } from "react";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "", enteredMovie: false };
  }

  onMovieChange = event => {
    this.state.movie = event.target.value;
    this.state.enteredMovie = true;
    if (this.state.movie.length === 0) {
      this.state.enteredMovie = false;
      this.state.movie = "Hey there. Enter your favorite movie.";
    }
    this.setState({
      movie: this.state.movie,
      enteredMovie: this.state.enteredMovie
    });
  };

  render() {
    return (
      <div>
        <p>
          {this.state.enteredMovie ? <label>My favorite movie is</label> : " "}{" "}
          <span style={{ color: "blue" }}>{this.state.movie}</span>
        </p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}
export default FavoriteMovie;
