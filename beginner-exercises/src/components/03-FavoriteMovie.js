/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
  }

  onMovieChange({ currentTarget }) {
    this.setState({ movie: currentTarget.value });
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        {movie.length > 0 ? (
          <p>
            My favorite movie is
            <span style={{ color: 'blue' }}>{movie}</span>
          </p>
        ) : (
          <p>Hey there. Enter your favorite movie. </p>
        )}
        <label htmlFor="name">
          My Favorite Movie:
          <input type="text" name="name" value={movie} onChange={this.onMovieChange} />
        </label>
      </div>
    );
  }
}

export default FavoriteMovie;
