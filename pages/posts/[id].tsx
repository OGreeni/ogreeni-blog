import React, { useState, useEffect, useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { signInWithGoogle } from '../../firebase/firebase';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import Code from '../../components/code';
import styles from './post.module.css';

import { UserContext } from '../../context/authContext';
import { queryPostData } from '../../utils/query';

interface Props {
  postData: {
    id: string;
    markdown: string;
    [key: string]: any;
  };
}

const Post = ({ postData }: Props) => {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    // TODO: QUERY DB FOR LIKE COUNT
    queryPostData({ title: 'Test' }).then((res) => setLikes(res.likes));
  }, []);

  console.log(likes);

  const { loggedIn } = useContext(UserContext);

  const thumbsUpClickHandler = () => {
    if (!loggedIn) {
      signInWithGoogle();
    } else {
      console.log('LOGGED IN!');
      fetch('thumbsup-endpoint');
      // TODO: QUERY FIRESTORE DB
    }
  };

  return (
    <Layout>
      <Head>
        <title>{postData.title} | Omri Green</title>
      </Head>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.author}>
        By:{' '}
        <Link href="/">
          <a>Omri Green</a>
        </Link>
        <br />
        {postData.date}
      </div>
      <article className={styles.article}>
        <Markdown
          options={{
            wrapper: React.Fragment,
            overrides: {
              code: {
                component: Code,
              },
            },
          }}
        >
          {postData.markdown}
        </Markdown>
      </article>
      <div className={styles.interact}>
        <button>
          <img src="/images/comment.png" alt="comment" />
        </button>
        <button onClick={thumbsUpClickHandler}>
          <img src="/images/thumbsup.png" alt="thumbs up" />{' '}
          <span className={styles.likes}>{likes}</span>
        </button>
      </div>
    </Layout>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
