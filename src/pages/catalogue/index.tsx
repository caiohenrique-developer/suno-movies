import React, { useState } from 'react';
import Head from 'next/head';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { CatalogueTitle } from '@components/CatalogueTitle';
import { CarouselContainer } from '@components/Carousel';
import { CardMovie } from '@components/CardMovie';
import { FilterButton } from '@components/FilterButton';

import FilterArrowDown from '@assets/catalogue-arrow-down.svg';
import FilterArrowUp from '@assets/catalogue-arrow-up.svg';

import { ActiveIndicator, Button } from '@styles/components/ButtonStyles';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addHomeID, homeID } = useHomeIndicator();

  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [layoutType, setLayoutType] = useState('grid');

  addHomeID('catalogue');

  const handleFilterDropDown = () => {
    setToggleDropDown(!toggleDropDown);

    const filterLayoutButton = document.querySelector('.filter-layout');
    const arrowIcon = document.querySelector('.filter-layout i');
    const optionsList = document.querySelectorAll('.option-item');

    optionsList.forEach((option) => {
      option.addEventListener('click', () => {
        const layoutType = option.querySelector('label').getAttribute('for');

        filterLayoutButton.prepend(arrowIcon);

        setLayoutType(layoutType);
        setToggleDropDown(false);
      });
    });
  };

  return (
    <>
      <Head>
        <title>Catálogo | Suno Movies</title>
      </Head>

      <Container id={homeID}>
        <section>
          <div>
            <CatalogueTitle
              title={[<strong>Lançamentos</strong>, ' da semana']}
            />

            <div>
              <CarouselContainer />
            </div>
          </div>

          <div>
            <CatalogueTitle title={[<strong>Catálogo</strong>, ' completo']} />
          </div>
        </section>

        <section>
          <div>
            <div>
              <div>
                <div className={`${toggleDropDown}`}>
                  <FilterButton
                    onClick={handleFilterDropDown}
                    className='btn-black hvr-shrink hvr-icon-hang filter-genre'
                    title='Opções'
                    iconBefore={
                      <i className='hvr-icon'>
                        {toggleDropDown ? (
                          <FilterArrowUp />
                        ) : (
                          <FilterArrowDown />
                        )}
                      </i>
                    }
                  />
                </div>

                <ActiveIndicator className='btn-pink'>
                  Mais populares
                </ActiveIndicator>
              </div>

              <div className={`${toggleDropDown}`}>
                <FilterButton
                  onClick={handleFilterDropDown}
                  className='btn-black hvr-shrink hvr-icon-hang filter-layout'
                  title={`Em ${layoutType}`}
                  iconBefore={
                    <i className='hvr-icon'>
                      {toggleDropDown ? <FilterArrowUp /> : <FilterArrowDown />}
                    </i>
                  }
                />
              </div>
            </div>

            <div className={layoutType}>
              <CardMovie
                key='8'
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
              <CardMovie
                className={`animate__animated ${
                  layoutType === 'grid'
                    ? `animate__backInDown`
                    : `animate__fadeInDownBig`
                }`}
              />
            </div>

            <Button className='btn-pink hvr-shrink'>Carregar mais</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
