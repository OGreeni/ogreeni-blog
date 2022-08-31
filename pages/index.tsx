import React from 'react';
import Head from 'next/head';

import Layout from '../components/layout';
import styles from './index.module.css';

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>Home | Omri Green</title>
      </Head>
      <section className={styles.desc}>
        <p>
          I'm a software developer and student at <b>Rutgers University</b>,
          passionate about all-things web dev.
        </p>
      </section>
    </Layout>
  );
};

export default Home;
