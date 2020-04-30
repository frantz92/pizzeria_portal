import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import RegisterForm from './RegisterForm';

export class UserForm extends Component {
  state = {
    step: 1,
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    passwordConfirm: '',
    name: '',
    surname: '',
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
    const {
      email,
      emailError,
      password,
      passwordError,
      passwordConfirm,
      passwordConfirmError,
      name,
      nameError,
      surname,
      surnameError,
    } = this.state;
    const values = {
      email,
      emailError,
      password,
      passwordError,
      passwordConfirm,
      passwordConfirmError,
      name,
      nameError,
      surname,
      surnameError,
    };

    // eslint-disable-next-line default-case
    switch (step) {
      case 0:
        return (
          <div>
            <RegisterForm
              nextStep={this.nextStep}
              prevStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );

      case 1:
        return (
          <div>
            <FormUserDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        window.location.pathname = '/panel/login/';
    }
  }
}

export default UserForm;
