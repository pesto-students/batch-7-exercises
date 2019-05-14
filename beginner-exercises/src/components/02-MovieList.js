import React, { Component } from 'react';

// We will create dynamic list of movies. Let's see how to render
// a list of items.
//
// Task #1: Add another movie (or movies) to the list.
// Task #2: Change `ul` HTML attribute `class` to 'movies-list'.

class MovieList extends Component {
  // We can put DOM elements delivered by React just like HTML elements.
  // Doesn't this code look familiar to you?
  // Refer to App.css for a list a classes or add one yourself
  render() {
    return (
      <ul className="movie-list">
        <li>The Godfather</li>
      </ul>
    );
  }
  // Think about it: Why is that `className` attribute not called just `class`?
  // Hint: Some words in JavaScript/JSX are reserved...
}

export default MovieList;
