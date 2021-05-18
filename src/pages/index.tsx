import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import MediaQuery from 'react-responsive';
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
        {/* Home background breakpoint */}
        <>
          {/* Mob */}
          <MediaQuery maxDeviceWidth={767}>
            <Image
              src='/images/Home_Background_Mobile.jpg'
              width={1400}
              height={1400}
              alt='Home background image'
              objectFit='cover'
            />
          </MediaQuery>

          {/* Tablet */}
          <MediaQuery minDeviceWidth={768} maxDeviceWidth={1079}>
            <Image
              src='/images/Home_Background_Small_Optimized.jpg'
              width={750}
              height={422}
              alt='Home background image'
              objectFit='cover'
            />
          </MediaQuery>

          {/* Desk and up */}
          <MediaQuery minDeviceWidth={1080}>
            <Image
              src='/images/Home_Background_Desktop.jpg'
              width={2160}
              height={1350}
              alt='Home background image'
              objectFit='cover'
            />
          </MediaQuery>
        </>

        <section>
          <aside>
            <h1>
              Filmes, séries e muito mais. <br /> Ilimitados.
            </h1>
            <p>Assista de onde quiser.</p>

            <ButtonBlack title="Let's go!?" />
          </aside>
        </section>
      </Container>
    </>
  );
}
