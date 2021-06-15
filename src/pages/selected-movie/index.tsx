import React, { useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { useReqApi } from '@hooks/useReqApi';
import { CTAButton } from '@components/CTAButton';
import { usePageIndicator } from '@hooks/usePageIndicator';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from '@styles/pages/SelectedMovie';

export default function SelectedMovie() {
  const {
    movieDetailApi: { id, title, description, poster, posterBkg, rating },
    reqApi,
  } = useReqApi();
  const { addPageID, pageID } = usePageIndicator();

  useEffect(() => {
    addPageID('selected-movie');
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Suno Movies</title>
      </Head>

      <Container id={pageID}>
        <section>
          <div>
            <div>
              <Image
                src={poster || '/assets/poster-placeholder.png'}
                width={334}
                height={494}
                objectFit='cover'
              />

              <div>
                <h1>{title}</h1>

                <div>
                  Comédia
                  <span>
                    <TiStarFullOutline /> {rating}
                  </span>
                </div>

                <div>
                  <span>Sinopse</span>

                  <p>{description}</p>
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
              src='https://www.youtube.com/embed/fJ9rUzIMcZQ'
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
