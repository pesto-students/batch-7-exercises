/* eslint-disable react/jsx-filename-extension */
import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pesto',
    };
    this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Updated!', { prevProps, prevState });
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  handleOnButtonClick() {
    const { name } = this.state;

    if (name === 'Pesto') {
      this.setState({ name: 'Vikalp' });
    } else {
      this.setState({ name: 'Pesto' });
    }
  }

  render() {
    return (
      <div>
        <p>
          Good morning, {this.state.name}!
        </p>
        <button onClick={this.handleOnButtonClick}>
          Change Name
        </button>
      </div>
    );
  }
}

export default LifeCycle;
