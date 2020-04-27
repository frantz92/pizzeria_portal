import React from 'react';

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
      <div>
        <p styles={styles.dateTime}>
          {this.state.dateTime.toLocaleDateString()}
        </p>
        <p styles={styles.dateTime}>
          {this.state.dateTime.toLocaleTimeString()}
        </p>
      </div>
    );
  }
}

const styles = {
  dateTime: {
    color: 'black',
  },
};
export default Time;
