import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Pesto" };
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

  render() {
    return (
      <div>
        <p>Good morning, {this.state.name}!</p>
        <button type="button" onClick={() => this.forceUpdate()}>
          Update Component
        </button>
      </div>
    );
  }
}

export default LifeCycle;
