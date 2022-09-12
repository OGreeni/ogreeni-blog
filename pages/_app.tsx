import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import TopNav from '../components/topnav';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
};

export default App;
