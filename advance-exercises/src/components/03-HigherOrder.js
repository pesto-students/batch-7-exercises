/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';
//import { createStore } from 'redux';


const withMouse = (Component) => {
  return Component;
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x:0, y:0 };
  }

  render() {
    const { mouse } = this.props;
    console.log(mouse);

    return (
      <div className="container" onChange={}>
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
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
