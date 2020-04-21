import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <TextField
          hintText='enter your occupations'
          floatingLabelText='occupations'
          onChange={handleChange('occupation')}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText='enter your city'
          floatingLabelText='city'
          onChange={handleChange('city')}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText='enter your bio'
          floatingLabelText='bio'
          onChange={handleChange('bio')}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label='back'
          primary={false}
          style={styles.button}
          onClick={this.back}
        />
        <RaisedButton
          label='next'
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default FormPersonalDetails;
