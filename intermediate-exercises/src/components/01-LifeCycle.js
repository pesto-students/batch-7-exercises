import React from 'react';

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: 'Pesto' };
  }

  componentDidMount() {
    console.log("I'm mounted!");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log({ prevProps, prevState });
    console.log('Updated!');
  }

  componentWillUnmount() {
    console.log('Good night, Pesto!');
  }

  changeName() {
    this.setState(state => {
      const { name } = state;
      return name === 'Pesto' ? { name: 'Rajat' } : { name: 'Pesto' };
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
        <p>Good morning, {name}!</p>
        <button type="button" onClick={() => this.changeName()}>
          Update Component
        </button>
      </div>
    );
  }
}

export default LifeCycle;
