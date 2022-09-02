import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../utils/posts';

interface Props {
  postData: {
    id: string;
    [key: string]: any;
  };
}

const Post = ({ postData }: Props) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | Omri Green</title>
      </Head>
      {postData.date}
      <br />
      <h1>{postData.title}</h1>
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
  const postData = getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
