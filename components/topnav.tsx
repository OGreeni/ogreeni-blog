import React from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';
import Button from './button';

const TopNav = () => {
  return (
    <nav className={styles.topNav}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <a className={`${styles.link} ${styles.brand}`}>
              Omri <span className={styles.green}>Green</span>
            </a>
          </Link>
        </div>
        <div>
          <a
            className={styles.link}
            href="http://github.com/OGreeni"
            target="_blank"
          >
            GitHub
          </a>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/login">
            <a className={styles.link}>Login</a>
          </Link>
          <Link href="/about">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
