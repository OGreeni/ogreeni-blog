import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'markdown-to-jsx';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';
import styles from './post.module.css';

interface Props {
  postData: {
    id: string;
    markdown: string;
    [key: string]: any;
  };
}

const Post = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Omri Green</title>
      </Head>
      <h1 className={styles.title}>{postData.title}</h1>
      <div className={styles.author}>
        {postData.date}
        <br />
        By:{' '}
        <Link href="/">
          <a>Omri Green</a>
        </Link>
      </div>
      <article className={styles.article}>
        <Markdown
          options={{
            wrapper: React.Fragment,
            overrides: {
              code: {
                component: SyntaxHighlighter,
                props: {
                  language: 'javascript',
                },
              },
            },
          }}
        >
          {postData.markdown}
        </Markdown>
      </article>
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
