import React from 'react';
import styles from './Dashboard.module.scss';

/*const style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};*/

const Dashboard = () => (
  <div className={styles.background}>
    <h2>Restaurant Managment App</h2>
    <h3>for</h3>
    <h1>waiters & cooks</h1>
  </div>
);

export default Dashboard;
