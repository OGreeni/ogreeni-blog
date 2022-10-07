import React, { useState, useEffect, useContext } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';

import { signInWithGoogle } from 'services/firebase';

import Layout from 'components/layout';
import { getAllPostIds, getPostData } from 'utils/posts';
import Code from 'components/code';
import styles from 'styles/post.module.css';

import { UserContext } from 'context/authContext';
import { getUserLikeStatus, changeUserLikeStatus } from 'utils/queries';

interface Props {
  postData: {
    id: string;
    markdown: string;
    [key: string]: any;
  };
}

const Post = ({ postData }: Props) => {
  const [userLiked, setUserLiked] = useState<boolean>(null);
  const { loggedIn, email } = useContext(UserContext);

  // TEMP FIX (NO DEPENDENCY ARRAY)
  useEffect(() => {
    if (userLiked === null) {
      getUserLikeStatus({ email, title: postData.title }).then((res) =>
        setUserLiked(res.liked)
      );
    }
  });

  const thumbsUpClickHandler = () => {
    if (!loggedIn) {
      signInWithGoogle();
    } else {
      changeUserLikeStatus({ email, title: postData.title });
      setUserLiked((prevUserLiked) => !prevUserLiked);
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
        <button
          onClick={thumbsUpClickHandler}
          className={userLiked ? styles.buttonClicked : ''}
        >
          <img src="/images/favorite.png" alt="thumbs up" />{' '}
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
