import React, { useState } from 'react';
import { MenuIcon } from '../MenuIcon/MenuIcon';
import { Navigation } from '../Navigation/Navigation';
import styles from './Header.module.scss';

export const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>AP_SOLUTION</h1>
      <MenuIcon isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      <Navigation isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </header>
  );
};
