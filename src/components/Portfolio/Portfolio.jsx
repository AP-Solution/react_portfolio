import styles from './Portfolio.module.scss';
import cn from 'classnames';

export const Portfolio = () => {
  return (
    <section className={styles.wrapper}>
      <div className={cn(
        styles.portfolio_item,
        styles.item_1
      )}></div>
      <div className={cn(
        styles.portfolio_item,
        styles.item_2
      )}></div>
      <div className={cn(
        styles.portfolio_item,
        styles.item_3
      )}></div>
      <div className={cn(
        styles.portfolio_item,
        styles.item_4
      )}></div>
      <div className={cn(
        styles.portfolio_item,
        styles.item_5
      )}></div>
      <div className={cn(
        styles.portfolio_item,
        styles.item_6
      )}></div>
    </section>
  );
};