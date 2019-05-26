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

import React from "react";
import PropTypes from "prop-types";

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
  state = {
    isSelected: false
  };
  handleClick = radio => {
    console.log(this.props);
    this.props.onChange(this.props.value, this.state.isSelected);
    this.setState({ isSelected: !this.state.isSelected });
  };
  render() {
    return (
      <div>
        <RadioIcon
          isSelected={this.state.isSelected}
          value={this.props.value}
          onClick={radio => {
            this.handleClick(radio);
          }}
        />{" "}
        {this.props.children}
      </div>
    );
  }
}

class RadioIcon extends React.Component {
  constructor(props) {
    super(props);
    console.log("radio icon", props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  static propTypes = {
    isSelected: PropTypes.bool.isRequired
  };
  handleOnClick = function() {
    this.props.onClick();
  };

  render() {
    return (
      <div
        tabIndex="0"
        style={{
          borderColor: "#ccc",
          borderWidth: 3,
          borderStyle: this.props.isSelected ? "inset" : "outset",
          height: 16,
          width: 16,
          display: "inline-block",
          cursor: "pointer",
          background: this.props.isSelected ? "rgba(0, 0, 0, 0.05)" : ""
        }}
        onClick={this.handleOnClick}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  render() {
    const radio = { am: false, fm: true, tape: false, aux: false };
    this.handleOnChange = (value, isSelected) => {
      radio[value] = isSelected;
    };
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue="fm">
          <RadioOption
            value="am"
            onChange={({ value, isSelected }) =>
              this.handleOnChange(value, isSelected)
            }
            tabIndex="0"
          >
            AM
          </RadioOption>
          <RadioOption
            value="fm"
            onChange={({ value, isSelected }) =>
              this.handleOnChange(value, isSelected)
            }
          >
            FM
          </RadioOption>
          <RadioOption
            value="tape"
            onChange={({ value, isSelected }) =>
              this.handleOnChange(value, isSelected)
            }
          >
            Tape
          </RadioOption>
          <RadioOption
            value="aux"
            onChange={({ value, isSelected }) =>
              this.handleOnChange(value, isSelected)
            }
          >
            Aux
          </RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
