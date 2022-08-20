import React from 'react';

import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.container}>
        <header>
          <div className={styles.titleContainer}>
            <h1 className={styles.mainTitle}>About me</h1>
            <img
              className={styles.greenCircle}
              src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/310/large-green-circle_1f7e2.png"
              alt="Green circle"
            />
          </div>
          <h2 className={styles.mainSubTitle}>
            I'm a full-stack web developer, mainly using the MERN stack. As of
            now, I'm pursuing my software engineering dream by studying computer
            science at Rutgers University.
          </h2>
        </header>
        <main>
          <section>
            <h3 className={styles.resumeTitle}>Download my resume:</h3>
          </section>
        </main>
      </div>
    </>
  );
};

export default About;
