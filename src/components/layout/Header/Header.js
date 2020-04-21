import React from 'react';
import PageNav from '../PageNav/PageNav';
import { AppBar } from '@material-ui/core';

class Header extends React.Component {
  render() {
    return (
      <AppBar position='relative'>
        <PageNav />
      </AppBar>
    );
  }
}

export default Header;
