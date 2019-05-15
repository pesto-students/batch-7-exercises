import React from 'react';

/*
  Tasks for this exercise are in comments inside the component class code.
  In this exercise lifecycle methods will be used to provide convenient debug
  messages in developer's console.
  There are more lifecycle methods available.
  Those three presented are commonly used.
 */

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
    this.updateState = this.updateState.bind(this);
  }

  // This code will be called when the component finishes mounting
  // (so it is visible for a user).
  componentDidMount() {
    // Task 1: Display a message "I'm mounted!" in developer's console when the
    //         component finishes mounting.
    //         Use `console.log` function for it.
    console.log('I\'m mounted');
  }

  updateState () {
    this.setState({ name: 'Pratiyush'});
  }

  componentDidUpdate(prevProps, prevState) {
    // Task 2: Display a message "Updated!" in developer's console
    //         when the component updates.
    //         Here you also need to use the console.log function.
    //         Notice that in this lifecycle method you have an access
    //         to previous values of properties and state.
    console.log({ prevProps, prevState });
    console.log('Updated');
  }

  componentWillUnmount() {
    // Task 3: Display a message "Good night, Pesto!" in developer's
    //         console when the component unmounts.
    console.log('Good night, Pesto');
  }

  // Task 4: Create a button which triggers ComponentDidUpdate lifecycle method on click.
  render() {
    return (
    <div>
      <p>Good morning, {this.state.name}!</p>
     <button onClick={this.updateState}>Update Name</button>
    </div>
    );
  }
}

export default LifeCycle;
