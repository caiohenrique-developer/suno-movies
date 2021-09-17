import React, { useEffect, useState } from 'react';
import { TiStarFullOutline } from 'react-icons/ti';

import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { fetchMovieDetail } from '@pages/api';

import { CTAButton } from '@components/CTAButton';

import { usePageIndicator } from '@hooks/usePageIndicator';

import { Container } from '@styles/pages/SelectedMovie';

import { FetchMovieDetailProps } from '@utils/types/api';

export default function SelectedMovie(): JSX.Element {
  const { addPageID, pageID } = usePageIndicator();

  const [selectedMovie, setSelectedMovie] = useState(
    {} as FetchMovieDetailProps,
  );

  const router = useRouter();
  const { slug } = router.query;

  if (slug === 'catalogue') {
    router.push(`/${slug}`);
  }

  useEffect(() => {
    addPageID('selected-movie');

    async function fetchData(movieID: number) {
      if (!Number.isNaN(movieID)) {
        const selectedMovieDetailApi = await fetchMovieDetail(movieID); // Get details by selected movie

        localStorage.setItem(
          '@SunoMoveis:selected-movie',
          JSON.stringify(selectedMovieDetailApi),
        );

        setSelectedMovie(selectedMovieDetailApi);
      }
    }
    fetchData(+slug); // I'm using the plus sign to convert the string to number
  }, [addPageID, slug]);

  if (process.browser) {
    const getFromStorageSelectedMovie = JSON.parse(
      localStorage.getItem('@SunoMoveis:selected-movie'),
    );
  }

  return (
    <>
      <Head>
        <title>{selectedMovie['title'] || 'Undefined'} | Suno Movies</title>
      </Head>

      <Container id={pageID} posterBkg={selectedMovie['posterBkg']}>
        <section>
          <div>
            <div>
              <Image
                src={
                  selectedMovie['poster'] || '/assets/poster-placeholder.png'
                }
                alt={selectedMovie['title'] || 'Undefined'}
                width={334}
                height={494}
                objectFit='cover'
              />

              <div>
                <h1>{selectedMovie['title'] || 'Undefined'}</h1>

                <div id='genres'>
                  {selectedMovie['genres']
                    ?.map(({ name }) => `${name}`)
                    .join(' - ') || 'Undefined'}
                  <span>
                    <TiStarFullOutline /> {selectedMovie['rating'] || 0.0}
                  </span>
                </div>

                <div>
                  <span>Sinopse</span>

                  <p>
                    {selectedMovie['description'] ||
                      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae, possimus. Aspernatur, minus commodi recusandae laudantium consequuntur deleniti totam voluptatum eius sint consequatur placeat blanditiis debitis perferendis consectetur quaerat est id?'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h4>{selectedMovie['trailer'] || 'Trailer'}</h4>

            <iframe
              width='100%'
              height='580'
              src={`https://www.youtube.com/embed/${selectedMovie['movieVideoID']}`}
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
