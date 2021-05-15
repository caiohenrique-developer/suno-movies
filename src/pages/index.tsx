import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { Container } from '@styles/pages/Home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Suno Movies</title>
      </Head>

      <Container>
        <Image
          src='/images/Home_Background_Desktop.jpg'
          width={2160}
          height={1350}
          alt='Home background image'
          objectFit='cover'
        />
      </Container>
    </>
  );
}
