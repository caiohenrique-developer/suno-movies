import GlobalsStyle from '@styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalsStyle />
    </>
  );
}

export default MyApp;
