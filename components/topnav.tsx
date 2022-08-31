import React from 'react';
import Link from 'next/link';

import styles from './topnav.module.css';

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
          <Link href="/about">
            <a className={styles.link}>GitHub</a>
          </Link>
          <Link href="/about">
            <a className={styles.link}>About</a>
          </Link>
          <Link href="/about">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
