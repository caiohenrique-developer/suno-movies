import React from 'react';

import { useRouter } from 'next/router';

import { Player } from '@lottiefiles/react-lottie-player';

import { Container } from './_styles';

export default function Custom404(): JSX.Element {
  const { route } = useRouter();

  const pageID = route === '/404' && 'page-not-found';

  return (
    <Container id={pageID}>
      <Player
        loop
        autoplay
        src='https://assets9.lottiefiles.com/packages/lf20_afwjhfb2.json'
      />
    </Container>
  );
}
