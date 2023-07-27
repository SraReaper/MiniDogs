import React from 'react';
import { MiniDogIcon } from './icons/minidog-icon';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <MiniDogIcon />
    </header>
  );
};

export default Header;
