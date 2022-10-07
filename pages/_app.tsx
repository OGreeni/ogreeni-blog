import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { onAuthStateChange } from '../firebase/firebase';

import TopNav from 'components/topnav';
import { UserProvider } from 'context/authContext';
import 'styles/global.css';

const App = ({ Component, pageProps }: AppProps) => {
  const [user, setUser] = useState({ loggedIn: false, email: null });

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <UserProvider value={user}>
        <TopNav />
        <Component {...pageProps} />
      </UserProvider>
    </>
  );
};

export default App;
