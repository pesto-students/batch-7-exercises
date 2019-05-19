import React, { Component } from "react";

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: "", enteredMovie: false };
  }

  onMovieChange = event => {
    const movieName = event.target.value;
    let enteredMovie = true;
    if (movieName.length === 0) {
      enteredMovie = false;
    }
    this.setState({
      movie: movieName,
      enteredMovie: enteredMovie
    });
  };

  render() {
    const { movie, enteredMovie } = this.state;
    return (
      <div>
        {enteredMovie ? (
          <p>
            <label>My favorite movie is</label>
            <span style={{ color: "blue" }}> {movie}</span>
          </p>
        ) : (
          <p> Hey there. Enter your favorite movie. </p>
        )}

        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}
export default FavoriteMovie;
