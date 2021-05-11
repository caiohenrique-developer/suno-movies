import React from 'react';
import { AppProps } from 'next/app';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <GlobalStyles />
    </>
  );
};

export default MyApp;
