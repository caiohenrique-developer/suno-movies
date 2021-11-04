import React, { useState } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { CardMovie } from '@components/CardMovie';
import { CarouselContainer } from '@components/Carousel';
import { CatalogueTitle } from '@components/CatalogueTitle';
import { FilterButtons } from '@components/FilterButton';

import { useFilteredButtonOption } from '@hooks/useFilteredButtonOption';

import { Button } from '@styles/components/ButtonStyles';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue(): JSX.Element {
  const [movieVisible, setMovieVisible] = useState(6);

  const { filteredLayout, filteredMoviesByGenre } = useFilteredButtonOption();
  const { route } = useRouter();

  const pageID = route === '/catalogue' && 'catalogue';

  const handleLoadMoreButton = () => {
    setMovieVisible(movieVisible + 6);
  };

  return (
    <>
      <Head>
        <title>Catálogo | Suno Movies</title>
      </Head>

      <Container id={pageID}>
        <section>
          <div>
            <CatalogueTitle
              title={
                <>
                  <strong>Lançamentos</strong> da semana
                </>
              }
            />

            <div>
              <CarouselContainer />
            </div>
          </div>

          <div id='catalogue-list'>
            <CatalogueTitle
              title={
                <>
                  <strong>Catálogo</strong> completo
                </>
              }
            />
          </div>
        </section>

        <section>
          <div>
            <FilterButtons />

            <div className={filteredLayout}>
              {filteredMoviesByGenre
                .slice(0, movieVisible)
                .map(({ id, genre, title, poster, description, rating }) => (
                  <CardMovie
                    key={id}
                    movieID={id}
                    className={`animate__animated ${
                      filteredLayout === 'grid'
                        ? 'animate__backInDown'
                        : 'animate__fadeInDownBig'
                    }`}
                    poster={poster}
                    title={title}
                    genre={genre}
                    description={description}
                    rating={rating}
                  />
                ))}
            </div>

            {movieVisible < filteredMoviesByGenre.length && (
              <Button
                onClick={handleLoadMoreButton}
                className='btn-pink hvr-shrink'
              >
                Carregar mais
              </Button>
            )}
          </div>
        </section>
      </Container>
    </>
  );
}
