import React, { Component } from 'react';

class FavoriteMovie extends Component {
  constructor(props) {
    super(props);
    this.state = { movie: '' };
  }

  onMovieChange = event => {
    this.setState({ movie: event.currentTarget.value });
  };

  render() {
    return (
      <div>
        <p>
          My favorite movie is <span style={{ color: 'blue' }}>{this.state.movie}</span>
        </p>
        <label htmlFor="name"> My Favorite Movie</label>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

export default FavoriteMovie;
