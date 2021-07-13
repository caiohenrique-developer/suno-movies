import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { useReqApi } from '@hooks/useReqApi';
import { CTAButton } from '@components/CTAButton';
import { usePageIndicator } from '@hooks/usePageIndicator';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from '@styles/pages/SelectedMovie';
import { FetchMovieDetailProps } from '@utils/types/api';

export default function SelectedMovie() {
  const { addPageID, pageID } = usePageIndicator();
  const {
    movieDetailApi: {
      title,
      description,
      genres,
      poster,
      posterBkg,
      rating,
      movieVideoID,
      trailer,
    },
  } = useReqApi();

  const [movie, setMovie] = useState({} as FetchMovieDetailProps);

  useEffect(() => {
    addPageID('selected-movie');
  }, []);

  if (process.browser) {
    const movieSelected = JSON.parse(
      localStorage.getItem('@SunoMoveis:movie-selected'),
    );

    // console.log(movieSelected);
  }

  return (
    <>
      <Head>
        <title>{title || 'Undefined'} | Suno Movies</title>
      </Head>

      <Container id={pageID} posterBkg={posterBkg}>
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
                <h1>{title || 'Undefined'}</h1>

                <div id='genres'>
                  {genres?.map(({ name }) => `${name} `) || 'Undefined'}
                  <span>
                    <TiStarFullOutline /> {rating || 0.0}
                  </span>
                </div>

                <div>
                  <span>Sinopse</span>

                  <p>
                    {description ||
                      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, possimus. Aspernatur, minus commodi recusandae laudantium consequuntur deleniti totam voluptatum eius sint consequatur placeat blanditiis debitis perferendis consectetur quaerat est id?'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>{trailer || 'Trailer'}</h4>

            <iframe
              width='100%'
              height='580'
              src={`https://www.youtube.com/embed/${movieVideoID}`}
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            />

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
