import React from 'react';
import PageNav from '../PageNav/PageNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

class Header extends React.Component {
  render(){
    return (
      <header className={styles.component}>
        <FontAwesomeIcon icon={faAtom} className={styles.logoIcon} />
        <div className={styles.logoText}>
          <div className={styles.name}>Atom</div>
          <div className={styles.name}>React</div>
          <div className={styles.name}>Redux</div>
          <div className={styles.name}>HTML</div>
          <div className={styles.name}>CSS</div>
          <div className={styles.name}>JavaScript</div>
        </div>
        <PageNav />
      </header>
    );
  }
}

export default Header;
