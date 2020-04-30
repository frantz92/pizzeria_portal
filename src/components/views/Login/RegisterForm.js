import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
      <form style={styles.container} noValidate autoComplete='off'>
        <TextField
          label='name'
          placeholder='enter your name'
          defaultValue={values.name}
          helperText={values.nameError}
          onChange={handleChange('name')}
        />
        <TextField
          label='surname'
          placeholder='enter your surname'
          defaultValue={values.surname}
          helperText={values.surnameError}
          onChange={handleChange('surname')}
        />
        <TextField
          label='email'
          placeholder='enter your email'
          defaultValue={values.email}
          helperText={values.emailError}
          onChange={handleChange('email')}
        />
        <TextField
          type='password'
          label='password'
          placeholder='enter your password'
          defaultValue={values.password}
          helperText={values.passwordError}
          onChange={handleChange('password')}
        />
        <TextField
          type='password'
          label='password'
          placeholder='confirm your password'
          defaultValue={values.passwordConfirm}
          helperText={values.passwordConfirmError}
          onChange={handleChange('passwordConfirm')}
        />

        <RadioGroup
          style={styles.radio}
          row
          aria-label='position'
          name='position'
        >
          <FormControlLabel
            value='waiter'
            control={<Radio color='primary' />}
            label='Waiter'
            labelPlacement='end'
          />
          <FormControlLabel
            value='cook'
            control={<Radio color='primary' />}
            label='Cook'
            labelPlacement='start'
          />
        </RadioGroup>
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
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  radio: {
    color: 'white',
  },
};

export default FormPersonalDetails;
