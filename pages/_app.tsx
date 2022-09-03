import React from 'react';
import type { AppProps } from 'next/app';

import TopNav from '../components/topnav';
import '../styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
};

export default App;
