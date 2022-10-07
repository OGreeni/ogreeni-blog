import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { GetStaticProps } from 'next';

import Layout from 'components/layout';
import styles from 'styles/index.module.css';
import { getSortedPostsData } from 'utils/posts';

interface PostData {
  id: string;
  date: string;
  [key: string]: any;
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
      <section className={styles.description}>
        <p>
          I'm a software developer and student at{' '}
          <strong>Rutgers University</strong>, passionate about all-things web
          dev.
        </p>
      </section>
      <section className={styles.blog}>
        <h1>My recent articles</h1>
        <ul>
          {postsData.map(({ id, title, date }) => (
            <Link href={`/posts/${id}`} key={id}>
              <li key={id}>
                {title}
                <br />
                <small className={styles.date}>{date}</small>
              </li>
            </Link>
          ))}
        </ul>
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
