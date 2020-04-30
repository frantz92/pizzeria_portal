import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

export class FormUserDetails extends Component {
  validateForm = () => {
    const { values } = this.props;

    let isError = false;
    const errors = {};

    if (values.email.indexOf('@') === -1 || values.email.indexOf('.') === -1) {
      isError = true;
      values.emailError = 'Required valid e-mail';
      values.error = isError;
    }

    if (values.password.length < 5) {
      isError = true;
      values.passwordError = 'Required min. 5 characters';
      values.error = isError;
    }

    if (isError) {
      this.setState({
        ...this.state,
        ...errors,
      });
    }

    return isError;
  };

  continue = e => {
    e.preventDefault();
    const errValidationForm = this.validateForm();
    if (!errValidationForm) {
      this.props.nextStep();
    }
  };

  register = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <form style={styles.container}>
        <TextField
          label='email'
          placeholder='enter your email'
          defaultValue={values.email}
          helperText={values.emailError}
          onChange={handleChange('email')}
          error={values.error}
        />
        <br />
        <TextField
          type='password'
          label='password'
          placeholder='enter your password'
          defaultValue={values.password}
          helperText={values.passwordError}
          onChange={handleChange('password')}
          error={values.error}
        />
        <br />
        <Button
          style={styles.button}
          variant='outlined'
          onClick={this.continue}
        >
          next
        </Button>
        <h3>or</h3>
        <Button
          style={styles.button}
          variant='outlined'
          onClick={this.register}
        >
          register
        </Button>
      </form>
    );
  }
}

const styles = {
  button: {
    borderColor: 'yellow',
    borderStyle: 'solid',
    borderSize: '2px',
    borderRadius: '35%',
    padding: '15px',
    height: '70px',
    width: '100px',
    fontSize: '18px',
    textAlign: 'center',
    margin: '5px',
    color: 'white',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
};
export default FormUserDetails;
