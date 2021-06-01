import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ReqApiProvider } from '@hooks/useReqApi';
import { PageIDProvider } from '@hooks/usePageIndicator';

import { Header } from '@components/Header';
import { Footer } from '@components/Footer';

import GlobalStyles from '@styles/globals';
import '@styles/responsive.scss';

import 'hover.css';
import 'animate.css';
import 'react-multi-carousel/lib/styles.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <ReqApiProvider>
        <PageIDProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </PageIDProvider>
      </ReqApiProvider>

      <GlobalStyles />
    </>
  );
};

export default MyApp;
