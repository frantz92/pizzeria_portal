import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUser,
  faTable,
  faConciergeBell,
  faClipboardList,
} from '@fortawesome/free-solid-svg-icons';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav>
    <NavLink
      exact
      to={process.env.PUBLIC_URL + '/'}
      activeClassName='active'
      style={{
        display: window.location.pathname === '/panel/' ? 'none' : 'block',
      }}
    >
      <FontAwesomeIcon icon={faHome} className={styles.icon} />
    </NavLink>
    <NavLink
      exact
      to={process.env.PUBLIC_URL + '/tables'}
      activeClassName='active'
      style={{
        display:
          window.location.pathname === '/panel/tables' ? 'none' : 'block',
      }}
    >
      <FontAwesomeIcon icon={faTable} className={styles.icon} />
    </NavLink>
    <NavLink
      exact
      to={process.env.PUBLIC_URL + '/ordering'}
      activeClassName='active'
      style={{
        display:
          window.location.pathname === '/panel/ordering' ? 'none' : 'block',
      }}
    >
      <FontAwesomeIcon icon={faConciergeBell} className={styles.icon} />
    </NavLink>
    <NavLink
      to={process.env.PUBLIC_URL + '/kitchen'}
      activeClassName='active'
      style={{
        display:
          window.location.pathname === '/panel/kitchen' ? 'none' : 'block',
      }}
    >
      <FontAwesomeIcon icon={faClipboardList} className={styles.icon} />
    </NavLink>
    <NavLink
      to={process.env.PUBLIC_URL + '/login'}
      activeClassName='active'
      style={{
        display: window.location.pathname === '/panel/login' ? 'none' : 'block',
      }}
    >
      <FontAwesomeIcon icon={faUser} className={styles.icon} />
    </NavLink>
  </nav>
);

export default PageNav;
