import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

export class FormPersonalDetails extends Component {
  validateForm = () => {
    const { values } = this.props;

    let isError = false;
    const errors = {};

    if (values.name.length < 1) {
      isError = true;
      values.nameError = 'Enter your name';
    }

    if (values.surname.length < 1) {
      isError = true;
      values.surnameError = 'Enter your surname';
    }

    if (values.email.indexOf('@') === -1 || values.email.indexOf('.') === -1) {
      isError = true;
      values.emailError = 'Required valid e-mail';
    }

    if (values.password.length < 5) {
      isError = true;
      values.passwordError = 'Required min. 5 characters';
    }

    if (values.passwordConfirm < 1) {
      isError = true;
      values.passwordConfirmError = 'Confirm your password';
    }

    if (values.passwordConfirm !== values.password) {
      isError = true;
      values.passwordConfirmError = 'Different passwords';
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

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <div style={styles.container}>
            <TextField
              hintText='enter your name'
              floatingLabelText='name'
              onChange={handleChange('name')}
              defaultValue={values.name}
              errorText={values.nameError}
            />
            <TextField
              hintText='enter your surname'
              floatingLabelText='surname'
              onChange={handleChange('surname')}
              defaultValue={values.surname}
              errorText={values.surnameError}
            />
            <TextField
              hintText='enter your email'
              floatingLabelText='email'
              onChange={handleChange('email')}
              defaultValue={values.email}
              errorText={values.emailError}
            />
            <TextField
              type='password'
              hintText='enter your password'
              floatingLabelText='password'
              onChange={handleChange('password')}
              defaultValue={values.password}
              errorText={values.passwordError}
            />
            <TextField
              type='password'
              hintText='confirm your password'
              floatingLabelText='confirm password'
              onChange={handleChange('passwordConfirm')}
              defaultValue={values.passwordConfirm}
              errorText={values.passwordConfirmError}
            />
          </div>
          <div style={styles.buttonContainer}>
            <Button
              variant='outlined'
              label='back'
              color='primary'
              style={styles.button}
              onClick={this.back}
            >
              back
            </Button>
            <Button
              variant='outlined'
              label='next'
              color='primary'
              style={styles.button}
              onClick={this.continue}
            >
              next
            </Button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
};

export default FormPersonalDetails;
