import React from 'react';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            Hi, I'm Omri <span className={styles.green}>Green</span>
          </h1>
        </div>
        <h2 className={styles.mainSubTitle}>
          I'm a software developer and also a student at Rutgers University,
          passionate about all-things web dev.
        </h2>
      </header>
    </div>
  );
};

export default Home;
