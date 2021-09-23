import React, { useEffect, useState } from 'react';
import MediaQuery from 'react-responsive';

import Head from 'next/head';

import { CardMovie } from '@components/CardMovie';
import { CarouselContainer } from '@components/Carousel';
import { CatalogueTitle } from '@components/CatalogueTitle';
import { FilterButton } from '@components/FilterButton';
import { FilterButtons } from '@components/FilterButton/filterButton';

import { usePageIndicator } from '@hooks/usePageIndicator';
import { useReqApi } from '@hooks/useReqApi';

import FilterArrowDown from '@assets/catalogue-arrow-down.svg';
import FilterArrowUp from '@assets/catalogue-arrow-up.svg';

import { GenreActiveIndicator, Button } from '@styles/components/ButtonStyles';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue(): JSX.Element {
  const { addPageID, pageID } = usePageIndicator();
  const { movieWithGenreApi, reqApi } = useReqApi();

  useEffect(() => {
    addPageID('catalogue');
  }, [addPageID]);

  const [toggleLayoutFilter, setToggleLayoutFilter] = useState(false);
  const [toggleGenreFilter, setToggleGenreFilter] = useState(false);
  const [layoutType, setLayoutType] = useState('grid');
  const [genreType, setGenreType] = useState('Populares');
  const [movieVisible, setMovieVisible] = useState(6);

  const handleFilterLayoutButton = () => {
    const optionsList = document
      .querySelector('.filter-layout')
      .nextElementSibling.querySelectorAll('.option-item');

    handleFilteredOption(optionsList);

    setToggleLayoutFilter(!toggleLayoutFilter);
    setToggleGenreFilter(false);
    setMovieVisible(6);
  };

  const handleFilterGenreButton = () => {
    const optionsList = document
      .querySelector('.filter-genre')
      .nextElementSibling.querySelectorAll('.option-item');

    handleFilteredOption(optionsList);
    setToggleGenreFilter(!toggleGenreFilter);
    setToggleLayoutFilter(false);
  };

  const handleFilteredOption = (filteredOption: NodeListOf<Element>) => {
    for (let i = 0; i < filteredOption.length; i++) {
      filteredOption[i].addEventListener(
        'click',
        function () {
          const filterButton = this.closest('ul').previousSibling;
          const current = this.parentElement.getElementsByClassName('selected');
          current[0].className = current[0].className.replace('selected', '');
          if (!this.classList.contains('selected'))
            this.className += 'selected';
          if (filterButton.classList.contains('filter-layout')) {
            const layoutCategory =
              this.querySelector('label').getAttribute('for');
            setLayoutType(layoutCategory);
            setToggleLayoutFilter(false);
          } else if (filterButton.classList.contains('filter-genre')) {
            const genreCategory = this.querySelector('label').innerText;
            const genreCategoryID =
              this.querySelector('input').getAttribute('id');
            // The plus sign turns another format into a number
            reqApi(+genreCategoryID);
            setGenreType(genreCategory);
            setToggleGenreFilter(false);
          }
        },
        false,
      );
    }
  };

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

            <div>
              <div>
                <div className={`${toggleGenreFilter}`}>
                  <FilterButton
                    onClick={handleFilterGenreButton}
                    className='btn-black hvr-shrink hvr-icon-hang filter-genre'
                    title={genreType}
                    iconBefore={
                      <i className='hvr-icon'>
                        {toggleGenreFilter ? (
                          <FilterArrowUp />
                        ) : (
                          <FilterArrowDown />
                        )}
                      </i>
                    }
                  />
                </div>

                <GenreActiveIndicator className='btn-pink'>
                  {genreType}
                </GenreActiveIndicator>
              </div>

              {/* Tablet and up */}
              <MediaQuery minDeviceWidth={768}>
                <div className={`${toggleLayoutFilter}`}>
                  <FilterButton
                    onClick={handleFilterLayoutButton}
                    className='btn-black hvr-shrink hvr-icon-hang filter-layout'
                    title={`Em ${layoutType}`}
                    iconBefore={
                      <i className='hvr-icon'>
                        {toggleLayoutFilter ? (
                          <FilterArrowUp />
                        ) : (
                          <FilterArrowDown />
                        )}
                      </i>
                    }
                  />
                </div>
              </MediaQuery>
            </div>

            <div className={layoutType}>
              {movieWithGenreApi
                .slice(0, movieVisible)
                .map(({ id, genre, title, poster, description, rating }) => (
                  <CardMovie
                    key={id}
                    movieID={id}
                    className={`animate__animated ${
                      layoutType === 'grid'
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

            {movieVisible < movieWithGenreApi.length && (
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
