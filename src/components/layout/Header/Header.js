import React from 'react';
import Time from '../Time/Time';
import styles from './Header.module.scss';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 0,
    backgroundColor: '#65C241',
    zIndex: '1',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header className={styles.header}>
      <AppBar position='fixed' color='primary' className={classes.appBar}>
        <Toolbar>
          <Time />
        </Toolbar>
      </AppBar>
    </header>
  );
}
