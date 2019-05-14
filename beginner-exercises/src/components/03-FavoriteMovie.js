import React, { Component } from 'react';

/*
You can pass props to components using JSX attributes.

You have two tasks to complete in this exercise:
Task #1: Someone left broken code in the `onMovieChange` method. It is always triggered
  after changing the value of `movie` input. This method takes
  event as its only argument. You need to retrieve the input value from
  that object and update the `movie` field in the `state` object.
Warning: Do not try to change the `render` structure.

Task #2: If there is no movie given, we should display a message encouraging
  the user to insert their favorite movie.
  Display text: "Hey there. Enter your favorite movie." if movie.length is 0.

Further reading on task #2: https://facebook.github.io/react/tips/if-else-in-JSX.html
*/

class FavoriteMovie extends Component {
/*
  By default `this.state` is `null`. In `render` we are referring to
  a specific element from the `state` object - `this.state.movie`.
  If we don't set an initial state, we will get an error. It's impossible to fetch
  an object key from `null`. (null.movie!!! => Error)

  Think about it: you can set movie from a cookie on component initialization!  ??
  What else could you do here?
*/

  constructor(props) {
    // Properties object is called `props`. You can access it with `this.props`.
    super(props);
    this.state = { movie: '' };
    this.onMovieChange = this.onMovieChange.bind(this);
    // Warning! If we don't bind this method - we would not be able to update state.
  }

  /*
    `event` is the only argument passed to that method. It will be an event
    object thrown by React on actions like `click`, `change` etc.

    You need to correct the call of `setState` method. Just try to set
    the `movie` field to the value passed in event.

    Hint: use `console.log` to check `event.target`. You will find text entered to the input there.
  */

  /* eslint-disable no-unused-vars, react/no-unused-state */
  onMovieChange(event) {
    // Huh... There's something wrong here...
    console.log(event.target.value);
    this.setState({ movie: event.target.value });
  }

  render() {
    const promtMessage =  'Hey there. Enter your favorite movie.';
    const favoriteMovie = this.state.movie ? this.state.movie : promtMessage;
    return (
      <div>
        <p>My favorite movie is <span style={{ color: 'blue' }}>{favoriteMovie}</span></p>
        <input type="text" name="name" onChange={this.onMovieChange} />
      </div>
    );
  }
}

// Notice some details here:
//   1. `onChange` attribute isn't placed between `" "`, but `{ }` - we want to
//      reference function, not string.
//   2. You must be very careful on methods binding. You can do it in the constructor.
//   3. `state` object is `null` by default! If you want to display initial
//       value from state object, you should initialize state object.

// ProTip: Always specify input's `name` attribute: React uses it to identify
//         inputs on page. Not doing so may cause you to waste a long time
//         debugging your program.

export default FavoriteMovie;
