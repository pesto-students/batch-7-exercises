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

const FormContext = React.createContext();

class FormContextProvider extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  };

  render() {
    return (
      <FormContext.Provider
        value={{
          state: this.state,
          changeField: (fieldName, value) => {
            const newState = {
              ...this.state,
              [fieldName]: value
            };
            this.setState(newState);
          },
          onSubmitHandler: () => {
            console.log(`Form Content:\nFirst Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}`);
          }
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  render() {
    return (<div>{this.props.children}</div>);
  }
}

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  render() {
    return <FormContext.Consumer>
    {context => <button onClick={context.onSubmitHandler}>{this.props.children}</button>}
  </FormContext.Consumer>
    
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <FormContext.Consumer>
        {context => (
          <input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={context.state[this.props.name]}
            onChange={(event, fieldName = this.props.name) =>
              context.changeField(fieldName, event.target.value)
            }
          />
        )}
      </FormContext.Consumer>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
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

        <FormContextProvider>
          <Form onSubmit={this.handleSubmit}>
            <p>
              <TextInput name="firstName" placeholder="First Name" />{' '}
              <TextInput name="lastName" placeholder="Last Name" />
            </p>
            <p>
              <SubmitButton>Submit</SubmitButton>
            </p>
          </Form>
        </FormContextProvider>
      </div>
    );
  }
}

export default Context;
