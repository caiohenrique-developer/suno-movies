import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { HomeIDProvider } from '@hooks/useHomeIndicator';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';
import '@styles/responsive.scss';

import 'hover.css';
import 'animate.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        {/* Viewport */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <HomeIDProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </HomeIDProvider>

      <GlobalStyles />
    </>
  );
};

export default MyApp;
