import React from 'react';
import { saveAs } from 'file-saver';

import styles from './About.module.css';

import Button from '../../components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles.titleContainer}>
          <h1 className={styles.mainTitle}>
            About <span className={styles.green}>Me</span>
          </h1>
        </div>
      </header>
      <h2 className={styles.mainSubTitle}>
        I'm a full-stack web developer, mainly using the MERN stack. As of now,
        I'm pursuing my software engineering dream by studying computer science
        at Rutgers University.
      </h2>
      <section className={styles.resume}>
        <h3>Download my resume:</h3>
        <a href="http://localhost:8080/resume">
          <Button>Download</Button>
        </a>
      </section>
    </div>
  );
};

export default About;
