import React from 'react';
import Head from 'next/head';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addHomeID } = useHomeIndicator();

  addHomeID('');

  return (
    <>
      <Head>
        <title>Catálogo | Suno Movies</title>
      </Head>

      <Container>Catalogue</Container>
    </>
  );
}
