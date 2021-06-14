import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import MediaQuery from 'react-responsive';

import { useReqApi } from '@hooks/useReqApi';
import { usePageIndicator } from '@hooks/usePageIndicator';

import { CatalogueTitle } from '@components/CatalogueTitle';
import { CarouselContainer } from '@components/Carousel';
import { CardMovie } from '@components/CardMovie';
import { FilterButton } from '@components/FilterButton';

import FilterArrowDown from '@assets/catalogue-arrow-down.svg';
import FilterArrowUp from '@assets/catalogue-arrow-up.svg';

import { ActiveIndicator, Button } from '@styles/components/ButtonStyles';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addPageID, pageID } = usePageIndicator();
  const { movieWithGenreApi, reqApi } = useReqApi();

  useEffect(() => {
    addPageID('catalogue');
  }, []);

  const [toggleLayout, setToggleLayout] = useState(false);
  const [toggleGenre, setToggleGenre] = useState(false);
  const [layoutType, setLayoutType] = useState('grid');
  const [genre, setGenre] = useState('Populares');
  const [movieVisible, setMovieVisible] = useState(6);

  const handleFilterLayoutButton = () => {
    const optionsList = document
      .querySelector('.filter-layout')
      .nextElementSibling.querySelectorAll('.option-item');

    handleFilteredOption(optionsList);

    setToggleLayout(!toggleLayout);
    setToggleGenre(false);
    setMovieVisible(6);
  };

  const handleFilterGenreButton = () => {
    const optionsList = document
      .querySelector('.filter-genre')
      .nextElementSibling.querySelectorAll('.option-item');

    handleFilteredOption(optionsList);

    setToggleGenre(!toggleGenre);
    setToggleLayout(false);
  };

  const handleFilteredOption = (filteredOption: NodeListOf<Element>) => {
    for (let i = 0; i < filteredOption.length; i++) {
      filteredOption[i].addEventListener('click', function () {
        const filterButton = this.closest('ul').previousSibling;
        const current = this.parentElement.getElementsByClassName('selected');

        current[0].className = current[0].className.replace('selected', '');

        if (!this.classList.contains('selected')) this.className += 'selected';

        if (filterButton.classList.contains('filter-layout')) {
          const layoutType = this.querySelector('label').getAttribute('for');

          setLayoutType(layoutType);
          setToggleLayout(false);
        } else if (filterButton.classList.contains('filter-genre')) {
          const genreCategory = this.querySelector('label').innerText;
          const genreCategoryID =
            this.querySelector('input').getAttribute('id');

          // The plus sign turns another format into a number
          reqApi(+genreCategoryID);
          setGenre(genreCategory);
          setToggleGenre(false);
        }
      });
    }
  };

  const loadMore = () => {
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
              title={[<strong>Lançamentos</strong>, ' da semana']}
            />

            <div>
              <CarouselContainer />
            </div>
          </div>

          <div id='catalogue-list'>
            <CatalogueTitle title={[<strong>Catálogo</strong>, ' completo']} />
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <div className={`${toggleGenre}`}>
                  <FilterButton
                    onClick={handleFilterGenreButton}
                    className='btn-black hvr-shrink hvr-icon-hang filter-genre'
                    title={genre}
                    iconBefore={
                      <i className='hvr-icon'>
                        {toggleGenre ? <FilterArrowUp /> : <FilterArrowDown />}
                      </i>
                    }
                  />
                </div>

                <ActiveIndicator className='btn-pink'>{genre}</ActiveIndicator>
              </div>

              {/* Tablet and up */}
              <MediaQuery minDeviceWidth={768}>
                <div className={`${toggleLayout}`}>
                  <FilterButton
                    onClick={handleFilterLayoutButton}
                    className='btn-black hvr-shrink hvr-icon-hang filter-layout'
                    title={`Em ${layoutType}`}
                    iconBefore={
                      <i className='hvr-icon'>
                        {toggleLayout ? <FilterArrowUp /> : <FilterArrowDown />}
                      </i>
                    }
                  />
                </div>
              </MediaQuery>
            </div>
            <div className={layoutType}>
              {movieWithGenreApi
                .slice(0, movieVisible)
                .map(({ id, genreIDs, title, poster, description, rating }) => {
                  return (
                    <CardMovie
                      key={id}
                      className={`animate__animated ${
                        layoutType === 'grid'
                          ? 'animate__backInDown'
                          : 'animate__fadeInDownBig'
                      }`}
                      poster={poster}
                      title={title}
                      description={description}
                      rating={rating}
                    />
                  );
                })}
            </div>

            {movieVisible < movieWithGenreApi.length && (
              <Button onClick={loadMore} className='btn-pink hvr-shrink'>
                Carregar mais
              </Button>
            )}
          </div>
        </section>
      </Container>
    </>
  );
}
