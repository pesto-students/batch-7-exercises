/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Clicking a <RadioOption> should update the value of <RadioGroup>
  - The selected <RadioOption> should pass the correct value to its <RadioIcon>
  - The `defaultValue` should be set on first render.

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Hint: Use tabIndex='0' on the <RadioOption>s so the keyboard will work
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/

import React from 'react';
import PropTypes from 'prop-types';

const RadioContext = React.createContext();

class RadioContextProvider extends React.Component {
  state = {
    selectedOption: 'fm'
  };

  render() {
    console.log(this.state.selectedOption);
    return (
      <RadioContext.Provider
        value={{
          state: this.state,
          setSelectedTo: newValue => this.setState({ selectedOption: newValue }),
          setNextOption: which => {
            let indexToSelect;
            const children = React.Children.toArray(this.props.children);
            React.Children.forEach(this, (radioOption, index) => {
              if (radioOption.props.value === this.state.selectedOption) {
                if (which === 'next') {
                  indexToSelect = index + 1;
                } else {
                  indexToSelect = index - 1;
                }
              }
            });
            const childrenCount = React.Children.count(this);
            if (indexToSelect < 0) {
              indexToSelect = childrenCount - 1;
            }
            if (indexToSelect === childrenCount) {
              indexToSelect = 0;
            }
            const child = children[indexToSelect].props.value;
            console.log(child);
            this.setState({ selectedOption: child });
          }
        }}
      >
        {this.props.children}
      </RadioContext.Provider>
    );
  }
}

class RadioGroup extends React.Component {
  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.shape().isRequired
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    children: PropTypes.shape().isRequired
  };

  render() {
    return (
      <RadioContext.Consumer>
        {({ state, setSelectedTo, setNextOption }) => {
          let isSelected = false;
          if (state.selectedOption === this.props.value) {
            isSelected = true;
          }
          return (
            <div
              onClick={() => setSelectedTo(this.props.value)}
              tabIndex={0}
              onKeyPress={event => {
                if (event.key === 'Enter' || event.key === ' ') {
                  setSelectedTo(this.props.value);
                }
              }}
              onKeyDown={event => {
                console.log(event.keyCode)
                if (event.keyCode === 39 || event.keyCode === 40) {
                  setNextOption('next');
                }
              }}
            >
              <RadioIcon isSelected={isSelected} /> {this.props.children}
            </div>
          );
        }}
      </RadioContext.Consumer>
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired
  };

  render() {
    return (
      <div
        style={{
          borderColor: '#ccc',
          borderWidth: 3,
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0, 0.05)' : ''
        }}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioContextProvider>
          <RadioGroup defaultValue="fm">
            <RadioOption value="am">AM</RadioOption>
            <RadioOption value="fm">FM</RadioOption>
            <RadioOption value="tape">Tape</RadioOption>
            <RadioOption value="aux">Aux</RadioOption>
          </RadioGroup>
        </RadioContextProvider>
      </div>
    );
  }
}

export default CompoundComponents;
