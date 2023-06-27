import React from 'react';
import styles from './MenuIcon.module.scss';
import cn from 'classnames';

export const MenuIcon = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <button
      type="button"
      className={cn(
        styles.menu_icon,
        { [styles.active]: isMenuActive }
      )}
      onClick={() => setIsMenuActive(!isMenuActive)}
    >
      <span></span>
    </button>
  );
};
