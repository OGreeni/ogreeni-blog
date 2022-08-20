import React from 'react';

import styles from './Home.module.css';
import profile from '../../assets/profile.jpg';

const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>Hi, I'm Omri Green</h1>
            <img
              className={styles.greenCircle}
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/large-green-circle_1f7e2.png"
              alt="Green circle"
            />
          </div>
          <h2 className={styles.mainSubTitle}>
            I'm a software developer and also a student at Rutgers University,
            passionate about all-things web dev.
          </h2>
        </header>
        <section>
          <img className={styles.profilePic} src={profile} alt="Profile" />
          <p>An awkward picture of me in NYC</p>
        </section>
        <section>
          <article>
            <h2 className={styles.techTitle}>My latest guides:</h2>
          </article>
        </section>
      </div>
    </>
  );
};

export default Home;
