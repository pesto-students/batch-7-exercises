import React, { Component } from "react";
import "./../App.css";

class MovieList extends Component {
  state = {
    movieList: ["The Godfather", "Fight Club"]
  };

  render() {
    const movieList = this.state.movieList.map(movie => (
      <li key={movie}>{movie}</li>
    ));
    return <ul className="movie-list">{movieList}</ul>;
  }
}

export default MovieList;
