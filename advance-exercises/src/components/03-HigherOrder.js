import React from "react";
import PropTypes from "prop-types";

function withMouse(Component) {
  return class Mouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0
      };
    }

    handleMouseMove(event) {
      this.setState({ x: event.clientX, y: event.clientY });
    }

    render() {
      return (
        <div onMouseMove={event => this.handleMouseMove(event)}>
          <Component mouse={this.state} />
        </div>
      );
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
