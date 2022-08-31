import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import styles from './layout.module.css';

interface Props {
  children: JSX.Element | JSX.Element[];
  home?: boolean;
  about?: boolean;
}

const Layout = ({ children, home, about }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="PLACEHOLDER" />
      </Head>
      {home && (
        <header>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>
              Hi, I'm Omri{' '}
              <span className={`${styles.title} ${styles.green}`}>Green</span>
            </h1>
            <Image
              src="/images/profile.jpg"
              height={400}
              width={400}
              alt="Omri Green"
              className={styles.profile}
            />
          </div>
        </header>
      )}
      {about && (
        <header>
          <div className={styles.headerContainer}>
            <h1 className={styles.title}>
              About{' '}
              <span className={`${styles.title} ${styles.green}`}>Me</span>
            </h1>
          </div>
        </header>
      )}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
