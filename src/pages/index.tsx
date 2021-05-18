import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { Container } from '@styles/pages/Home';
import { ButtonBlack } from '@components/ButtonBlack';

export default function Home() {
  const { addHomeID } = useHomeIndicator();

  addHomeID('home');

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

        <section>
          <aside>
            <h1>
              Filmes, séries e muito mais. <br /> Ilimitados.
            </h1>
            <p>
              Assista de onde quiser. <strong>Let's go!?</strong>
            </p>

            <ButtonBlack />
          </aside>
        </section>
      </Container>
    </>
  );
}
