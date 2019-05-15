/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(event) {
      const { clientX, clientY } = event;
      this.setState({
        x: clientX,
        y: clientY,
      });
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
          <Component mouse={this.state} {...this.props} />
        </div>
      );
    }
  };
}

const App = ({ mouse }) => (
  <div className="container">
    {mouse ? (
      <h1>
        The mouse position is (
        {mouse.x}
        ,
        {mouse.y}
      )
      </h1>
    ) : (
      <h1>We don&#39;t know the mouse position yet :(</h1>
    )}
  </div>
);

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
