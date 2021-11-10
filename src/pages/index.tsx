import React from 'react';
import MediaQuery from 'react-responsive';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { CTAButton } from '@components/CTAButton';

import RightArrow from '@assets/chevron-next-outline.svg';

import { Container } from './_home/styles';

export default function Home(): JSX.Element {
  const { route } = useRouter();

  const pageID = route === '/' && 'home';

  return (
    <>
      <Head>
        <title>Home | Suno Movies</title>
      </Head>

      <Container id={pageID}>
        {/* Home image background breakpoint */}
        <>
          {/* Mob */}
          <MediaQuery maxWidth={767}>
            <Image
              src='/images/Home_Background_Mobile.jpg'
              width={1400}
              height={1400}
              alt='Home background image'
              objectFit='cover'
            />
          </MediaQuery>

          {/* Tablet */}
          <MediaQuery minWidth={768} maxWidth={1079}>
            <Image
              src='/images/Home_Background_Small_Optimized.jpg'
              width={750}
              height={422}
              alt='Home background image'
              objectFit='cover'
            />
          </MediaQuery>

          {/* Desk and up */}
          <MediaQuery minWidth={1080}>
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

            <CTAButton
              pageUrl='/catalogue'
              className='btn-black hvr-shrink hvr-icon-grow hvr-icon-wobble-horizontal'
              title="Let's go!?"
              iconAfter={
                <i className='hvr-icon'>
                  <RightArrow />
                </i>
              }
            />
          </aside>
        </section>
      </Container>
    </>
  );
}
