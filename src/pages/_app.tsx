import React from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import { FilteredButtonOptionProvider } from '@hooks/useFilteredButtonOption';
import { PageIDProvider } from '@hooks/usePageIndicator';
import { ReqApiProvider } from '@hooks/useReqApi';

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

      <FilteredButtonOptionProvider>
        <ReqApiProvider>
          <PageIDProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </PageIDProvider>
        </ReqApiProvider>
      </FilteredButtonOptionProvider>

      <GlobalStyles />
    </>
  );
};

export default MyApp;
