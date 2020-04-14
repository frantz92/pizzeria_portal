import React from 'react';
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faTable, faConciergeBell, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import styles from './PageNav.module.scss';

const PageNav = () => (
  <nav>
    <NavLink exact to={process.env.PUBLIC_URL + '/'} activeClassName='active'><FontAwesomeIcon icon={faHome} className={styles.icon} />home</NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/login'} activeClassName='active'><FontAwesomeIcon icon={faUser} className={styles.icon}/>login</NavLink>
    <NavLink exact to={process.env.PUBLIC_URL + '/tables'} activeClassName='active'><FontAwesomeIcon icon={faTable} className={styles.icon}/>tables</NavLink>
    <NavLink exact to={process.env.PUBLIC_URL + '/ordering'} activeClassName='active'><FontAwesomeIcon icon={faConciergeBell} className={styles.icon}/>order</NavLink>
    <NavLink to={process.env.PUBLIC_URL + '/kitchen'} activeClassName='active'><FontAwesomeIcon icon={faClipboardList} className={styles.icon}/>kitchen</NavLink>
  {/*  <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
    <NavLink to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</NavLink>
*/}
  </nav>
);

export default PageNav;
