import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import Dashboard from '../Dashboard/Dashboard';

export class UserForm extends Component {
  state = {
    step: 1,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  };

  // Proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  };

  render() {
    const { step } = this.state;
    const { email, emailError, password, passwordError } = this.state;
    const values = {
      email,
      emailError,
      password,
      passwordError,
    };

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return Dashboard();
    }
  }
}

export default UserForm;
