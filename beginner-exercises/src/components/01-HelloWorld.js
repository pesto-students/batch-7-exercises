import React, { Component } from "react";

// Task: Render "Hello World" text.
class HelloWorld extends Component {
  // All components *must* have a `render` method defined.

  // To define a component's render method, we use syntax called JSX. As you
  // can see it looks similar to HTML. JSX gets converted to
  // JavaScript code. It is here just for readability purposes.

  render() {
    return <h1>Hello World</h1>;
  }
}

export default HelloWorld;
