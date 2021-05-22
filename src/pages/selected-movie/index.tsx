import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { CTAButton } from '@components/CTAButton';
import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from '@styles/pages/SelectedMovie';

export default function SelectedMovie() {
  const { addHomeID } = useHomeIndicator();

  addHomeID('');

  return (
    <>
      <Head>
        <title>Assistir ao filme | Suno Movies</title>
      </Head>

      <Container>
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

            <video width='100%' height='auto' controls>
              <source
                src='https://www.youtube.com/watch?v=2-OWmDS88so&list=RDEMkYt5Wa4ltK2BRo3LgJP41Q&index=27'
                type='video/mp4'
              />
              <source
                src='https://www.youtube.com/watch?v=2-OWmDS88so&list=RDEMkYt5Wa4ltK2BRo3LgJP41Q&index=27'
                type='video/ogg'
              />
              Your browser does not support the video tag.
            </video>

            <CTAButton pageUrl='/catalogue' title='Voltar' />
          </div>
        </section>
      </Container>
    </>
  );
}
