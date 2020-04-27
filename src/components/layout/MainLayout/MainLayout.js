import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Drawer from '../Drawer/Drawer';

const MainLayout = props => (
  <div>
    <Header />
    <Drawer />
    {props.children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
