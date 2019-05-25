import React from "react";

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
    this.state = { name: "Pesto" };
    this.updateVirtualDOM = this.updateVirtualDOM.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log("Updated!");
  }

  componentWillUnmount() {
    console.log("Good night, Pesto!");
  }

  updateVirtualDOM() {
    this.setState({ name: "Pestros" });
  }

  // Task 4: Create a button which triggers ComponentDidUpdate lifecycle method on click.
  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button onClick={this.updateVirtualDOM}> Update DOM</button>
      </div>
    );
  }
}

export default LifeCycle;
