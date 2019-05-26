/*
  Q2:

  Using context, implement the <Form>, <SubmitButton>, and <TextInput>
  components such that:

  - Clicking the <SubmitButton> calls <Form onSubmit>
  - Hitting "Enter" while in a <TextInput> submits the form
  - Don't use a <form> element, we're intentionally recreating the
    browser's built-in behavior

  - Send the values of all the <TextInput>s to the <Form onSubmit> handler
    without using DOM traversal APIs
  - Implement a <ResetButton> that resets the <TextInput>s in the form
*/

import React from "react";
import PropTypes from "prop-types";

const FormContext = React.createContext({
  getDataValue: name => "",
  onInputChange: name => event => {
    null;
  }
});
class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  constructor() {
    super();
  }
  state = {
    data: {}
  };
  getDataValue = name => {
    console.log("get data value name :", name);
    return this.state.data[name] || "";
  };

  onInputChange = name => event => {
    const targetValue = event.target.value;
    this.setState(state => {
      return {
        data: { ...state.data, [name]: targetValue }
      };
    });
  };
  handleSubmit = () => {
    this.props.onSubmit(this.state.data);
  };
  onReset = () => {
    this.setState({ data: {} });
  };
  handleKeyDown = event => {
    if (event.keyCode === 13) {
      this.handleSubmit();
    }
  };
  render() {
    return (
      <FormContext.Provider
        value={{
          getDataValue: this.getDataValue,
          onInputChange: this.onInputChange,
          onSubmit: this.handleSubmit,
          onReset: this.onReset
        }}
      >
        <div onKeyDown={this.handleKeyDown}>{this.props.children} </div>
      </FormContext.Provider>
    );
  }
}

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  static contextType = FormContext;
  handleClick = () => {
    this.context.onSubmit();
  };
  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

class ResetButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  static contextType = FormContext;
  handleClick = () => {
    this.context.onReset();
  };
  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

class TextInput extends React.Component {
  static contextType = FormContext;
  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={this.context.onInputChange(this.props.name)}
        value={this.context.getDataValue(this.props.name)}
      />
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

class Context extends React.Component {
  handleSubmit = ({ firstName, lastName }) => {
    alert(`First Name: ${firstName}\nLast Name: ${lastName}`);
  };

  render() {
    return (
      <div>
        <h1>Add form</h1>

        <Form onSubmit={this.handleSubmit}>
          <p>
            <TextInput name="firstName" placeholder="First Name" />{" "}
            <TextInput name="lastName" placeholder="Last Name" />
          </p>
          <p>
            <SubmitButton>Submit</SubmitButton>
            <ResetButton>Reset</ResetButton>
          </p>
        </Form>
      </div>
    );
  }
}

export default Context;
