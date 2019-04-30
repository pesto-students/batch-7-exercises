
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

import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }
  render() {
    return <div>{this.props.children}</div>;
  }
}

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired,
  }
  render() {
    return <button>{this.props.children}</button>;
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        name={this.props.name}
        placeholder={this.props.placeholder}
      />
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

class Context extends React.Component {
  handleSubmit = () => {
    alert('YOU WIN!');
  };

  render() {
    return (
      <div>
        <h1>
          This isn&#39;t even my final <code>&lt;Form/&gt;</code>!
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <p>
            <TextInput name="firstName" placeholder="First Name" />{' '}
            <TextInput name="lastName" placeholder="Last Name" />
          </p>
          <p>
            <SubmitButton>Submit</SubmitButton>
          </p>
        </Form>
      </div>
    );
  }
}

export default Context;
