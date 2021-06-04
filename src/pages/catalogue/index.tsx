import React, { useState } from 'react';
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
  const { movieDiscoverWithGenreApi, reqMovieDiscoverWithGenreApi } =
    useReqApi();

  addPageID('catalogue');

  const [toggleLayout, setToggleLayout] = useState(false);
  const [toggleGenre, setToggleGenre] = useState(false);
  const [layoutType, setLayoutType] = useState('grid');
  const [genre, setGenre] = useState('Ação');

  const handleFilterLayoutButton = () => {
    const filterLayoutButton = document.querySelector('.filter-layout');
    const arrowIcon = document.querySelector('.filter-layout i');
    const optionsList = document
      .querySelector('.filter-layout')
      .nextElementSibling.querySelectorAll('.option-item');

    for (let i = 0; i < optionsList.length; i++) {
      optionsList[i].addEventListener('click', function () {
        const layoutType = this.querySelector('label').getAttribute('for');
        const current = document
          .querySelector('.filter-layout')
          .nextElementSibling.getElementsByClassName('selected');

        current[0].className = current[0].className.replace('selected', '');

        this.className += 'selected';

        filterLayoutButton.prepend(arrowIcon);

        setLayoutType(layoutType);
        setToggleLayout(false);
      });
    }

    setToggleLayout(!toggleLayout);
    setToggleGenre(false);
  };

  const handleFilterGenreButton = () => {
    const filterGenreButton = document.querySelector('.filter-genre');
    const arrowIcon = document.querySelector('.filter-genre i');
    const optionsList = document
      .querySelector('.filter-genre')
      .nextElementSibling.querySelectorAll('.option-item');

    for (let i = 0; i < optionsList.length; i++) {
      optionsList[i].addEventListener('click', function () {
        const genreCategory = this.querySelector('label').innerText;
        const genreCategoryID = this.querySelector('input').getAttribute('id');
        const current = document
          .querySelector('.filter-genre')
          .nextElementSibling.getElementsByClassName('selected');

        current[0].className = current[0].className.replace('selected', '');

        this.className += 'selected';

        filterGenreButton.prepend(arrowIcon);

        // The plus sign turns another format into a number
        reqMovieDiscoverWithGenreApi(+genreCategoryID);

        setGenre(genreCategory);
        setToggleGenre(false);
      });
    }

    setToggleGenre(!toggleGenre);
    setToggleLayout(false);
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
              {movieDiscoverWithGenreApi.map(
                ({ id, genreIDs, title, poster, description, rating }) => {
                  return (
                    <CardMovie
                      key={id}
                      className={`animate__animated ${
                        layoutType === 'grid'
                          ? `animate__backInDown`
                          : `animate__fadeInDownBig`
                      }`}
                      poster={poster}
                      title={title}
                      description={description}
                      rating={rating}
                    />
                  );
                },
              )}
            </div>

            <Button className='btn-pink hvr-shrink'>Carregar mais</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
