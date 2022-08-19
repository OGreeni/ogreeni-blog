import React from 'react';

import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a>Contact me</a>
        <a>LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;
