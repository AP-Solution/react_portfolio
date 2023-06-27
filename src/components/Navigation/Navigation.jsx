import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';


export const Navigation = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <nav className={cn(
      styles.nav_wrapper,
     { [styles.active]: isMenuActive }
    )}>
      <ul
        className={styles.nav_items}
        onClick={(e) => {
          if (e.target.tagName === 'A') {
            setIsMenuActive(!isMenuActive);
          }
        }}
      >
        <li className={styles.nav_item}>
          <Link to="/" className={styles.nav_link}>
            Home
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/about" className={styles.nav_link}>
            About
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/dropdown" className={styles.nav_link}>
            Dropdown
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/portfolio" className={styles.nav_link}>
            Portfolio
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/blog" className={styles.nav_link}>
            Blog
          </Link>
        </li>

        <li className={styles.nav_item}>
          <Link to="/contacts" className={styles.nav_link}>
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};