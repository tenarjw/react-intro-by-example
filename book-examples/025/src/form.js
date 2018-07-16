import React, { Component } from 'react';

function validate(email, password) {
  return {
    email: email.length === 0,
    password: password.length === 0,
  };
}


class SignUpForm extends React.Component {

  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',

      everFocusedEmail: false,
      everFocusedPassword: false,
      inFocus: '',
    };
  }

  handleEmailChange = (evt) => {
    this.setState({ email: evt.target.value });
  }

  handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }

  handleSubmit = (evt) => {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    if (isDisabled) {
      evt.preventDefault();
      return;
    }
    const { email, password } = this.state;
    alert(`Login with email: ${email} password: ${password}`);
  }

  render() {
    const errors = validate(this.state.email, this.state.password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          className={errors.email ? "error" : ""}
          type="text"
          placeholder="Enter email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <input
          className={errors.password ? "error" : ""}
          type="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
        />
        <button disabled={isDisabled}>Sign up</button>
      </form>
    )
  }
}


export default SignUpForm;
