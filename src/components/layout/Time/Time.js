import React from 'react';
import Box from '@material-ui/core/Box';

class Time extends React.Component {
  constructor() {
    super();
    this.state = { dateTime: new Date() };
  }

  currentTime() {
    this.setState({
      dateTime: new Date(),
    });
  }

  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <Box style={styles.dateTime}>
        <h2 style={styles.time}>{this.state.dateTime.toLocaleTimeString()}</h2>
        <h3 style={styles.date}>{this.state.dateTime.toDateString()}</h3>
      </Box>
    );
  }
}

const styles = {
  dateTime: {
    color: 'white',
    margin: '10px',
  },
  time: {
    margin: '0',
  },
  date: {
    margin: '0',
    fontSize: '12px',
  },
};
export default Time;
