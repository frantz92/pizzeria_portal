import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
  validateForm = () => {
    const { values } = this.props;

    let isError = false;
    const errors = {};

    if (values.email.indexOf('@') === -1) {
      isError = true;
      values.emailError = 'Required valid e-mail';
    }

    if (values.password.length < 5) {
      isError = true;
      values.passwordError = 'Required min. 5 characters';
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
      <MuiThemeProvider>
        <React.Fragment>
          <div style={styles.container}>
            <TextField
              hintText='enter your email'
              floatingLabelText='email'
              onChange={handleChange('email')}
              errorText={values.emailError}
              defaultValue={values.email}
              style={styles.text}
            />
            <br />
            <TextField
              type='password'
              hintText='enter your password'
              floatingLabelText='password'
              onChange={handleChange('password')}
              errorText={values.passwordError}
              defaultValue={values.password}
              style={styles.text}
            />
            <br />
            <Button
              variant='outlined'
              label='next'
              color='primary'
              style={styles.button}
              onClick={this.continue}
            >
              next
            </Button>
            <h3>or</h3>
            <Button
              variant='outlined'
              label='next'
              color='primary'
              style={styles.button}
              onClick={this.register}
            >
              register
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
    height: '50vh',
  },
};

export default FormUserDetails;
