import cn from 'classnames';
import styles from './Navigation.module.scss';


export const Navigation = ({ isMenuActive }) => {
  return (
    <div className={cn(
      styles.menu_wrapper,
     { [styles.active]: isMenuActive }
    )}>
    </div>
  );
};