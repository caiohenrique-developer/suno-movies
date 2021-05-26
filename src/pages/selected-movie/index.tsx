import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { CTAButton } from '@components/CTAButton';
import { usePageIndicator } from '@hooks/usePageIndicator';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from '@styles/pages/SelectedMovie';

export default function SelectedMovie() {
  const { addPageID, pageID } = usePageIndicator();

  addPageID('selected-movie');

  return (
    <>
      <Head>
        <title>Assistir ao filme | Suno Movies</title>
      </Head>

      <Container id={pageID}>
        <section>
          <div>
            <div>
              <Image
                src='/assets/desk/movie-selected/selected-movie-thumbnail.png'
                width={334}
                height={494}
                objectFit='cover'
              />

              <div>
                <h1>Solteira Quase Surtando</h1>

                <div>
                  Comédia
                  <span>
                    <TiStarFullOutline /> 8.4
                  </span>
                </div>

                <div>
                  <span>Sinopse</span>

                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>Trailer</h4>

            <iframe
              width='100%'
              height='580'
              src='https://www.youtube.com/embed/2-OWmDS88so'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>

            <CTAButton
              className='btn-pink hvr-shrink'
              pageUrl='/catalogue'
              title='Voltar'
            />
          </div>
        </section>
      </Container>
    </>
  );
}
