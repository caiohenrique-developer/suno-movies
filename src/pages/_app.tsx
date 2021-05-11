import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyles from '@styles/globals';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyles />
    </>
  );
};

export default MyApp;
