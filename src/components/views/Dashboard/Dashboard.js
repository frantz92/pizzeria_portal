import React from 'react';
import styles from './Dashboard.module.scss';
import PageNav from '../../layout/PageNav/PageNav';

/*const style = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};*/

const Dashboard = () => (
  <div className={styles.background}>
    <PageNav />
    <h2>Restaurant Managment App</h2>
    <h3>for</h3>
    <h1>waiters & cooks</h1>
  </div>
);

export default Dashboard;
