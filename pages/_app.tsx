import React from 'react';

import TopNav from '../components/topnav';

import '../styles/global.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <TopNav />
      <Component {...pageProps} />
    </>
  );
};

export default App;
