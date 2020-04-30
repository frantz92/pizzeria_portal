import React from 'react';
import Time from '../Time/Time';
import styles from './Header.module.scss';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../images/logo.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: '0',
    backgroundColor: '#65C241',
    zIndex: '1',
    textAlign: 'center',
    minHeight: '100px',
  },
  avatar: {
    position: 'absolute',
    right: '20px',
    marginTop: '10px',
    backgroundColor: 'white',
    color: '#65C241',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header className={styles.header}>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <img src={Logo} alt='logo' className={styles.logo}></img>
        <Time />
        <Avatar className={classes.avatar}>W</Avatar>
        <h6 className={styles.loggedName}>Logged Name</h6>
      </AppBar>
    </header>
  );
}
