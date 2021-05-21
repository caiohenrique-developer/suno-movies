import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

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
              <Image />

              <div>
                <h1>Solteira Quase Surtando</h1>

                <div>
                  Comédia <span>svg 8.4</span>
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
            Player do filme <h4>Trailer</h4>
          </div>
        </section>
      </Container>
    </>
  );
}
