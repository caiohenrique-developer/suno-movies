import React from 'react';
import { AppProps } from 'next/app';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';
import { AppContainer } from '@styles/pages/App/style';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AppContainer>
      <Header />
      <Component {...pageProps} />
      <Footer />

      <GlobalStyles />
    </AppContainer>
  );
};

export default MyApp;
