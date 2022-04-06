import React, { useEffect, useState } from 'react';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

import GlobalStyles from '@styles/globals';

import { FilteredButtonOptionProvider } from '@hooks/useFilteredButtonOption';
import { ReqApiProvider } from '@hooks/useReqApi';

import 'hover.css';
import 'animate.css';
import 'react-multi-carousel/lib/styles.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) return null;

  return (
    <>
      <Head>
        {/* Viewport meta tag */}
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <FilteredButtonOptionProvider>
        <ReqApiProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ReqApiProvider>
      </FilteredButtonOptionProvider>

      <GlobalStyles />
    </>
  );
};

export default MyApp;
