import React from 'react';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.description}>New amazing projects is coming!</p>
      <div className={styles.projects}>
      </div>
    </div>
  );
};

export default Main;
