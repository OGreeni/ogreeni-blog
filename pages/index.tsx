import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';
import matter from 'gray-matter';

import Layout from '../components/layout';
import styles from './index.module.css';
import { getSortedPostsData } from '../utils/posts';

interface PostData extends matter.GrayMatterFile<string> {
  id: string;
}

interface Props {
  postsData: PostData[];
}

const Home = ({ postsData }: Props) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const postsData = getSortedPostsData();

  return {
    props: {
      postsData,
    },
  };
};

export default Home;
