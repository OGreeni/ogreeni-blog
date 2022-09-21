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
import {
  queryPostData,
  updatePostLikes,
  updateUserLikes,
  userLikeStatus,
} from '../../utils/queries';

interface Props {
  postData: {
    id: string;
    markdown: string;
    [key: string]: any;
  };
}

const Post = ({ postData }: Props) => {
  const [likes, setLikes] = useState(0);
  const [userLiked, setUserLiked] = useState(false);
  const [userId, setUserId] = useState('');
  const { loggedIn, email } = useContext(UserContext);

  useEffect(() => {
    // TODO: QUERY DB FOR LIKE COUNT
    queryPostData({ title: 'Test' }).then((res) => setLikes(res.likes));
    userLikeStatus({ email, title: 'Test' }).then((res) => {
      setUserLiked(res.liked);
      setUserId(res.id);
    });
  }, []);

  const thumbsUpClickHandler = () => {
    if (!loggedIn) {
      signInWithGoogle();
    } else {
      setUserLiked((prevUserLiked) => !prevUserLiked);
      if (userId) {
        updateUserLikes({ id: userId, title: 'test' });
      }
      if (userLiked) {
        setLikes((prevLikes) => prevLikes + 1);
        updatePostLikes({ title: 'Test', increase: true });
      } else {
        setLikes((prevLikes) => prevLikes - 1);
        updatePostLikes({ title: 'Test', increase: false });
      }
    }
  };

  console.log(userLiked);

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
        <div className={userLiked ? styles.buttonBackground : ''}>
          <button onClick={thumbsUpClickHandler}>
            <img src="/images/thumbsup.png" alt="thumbs up" />{' '}
            <span className={styles.likes}>{likes}</span>
          </button>
        </div>
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
