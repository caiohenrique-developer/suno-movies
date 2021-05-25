import React, { useState } from 'react';
import Head from 'next/head';

import { useHomeIndicator } from '@hooks/useHomeIndicator';

import { CatalogueTitle } from '@components/CatalogueTitle';
import { CarouselContainer } from '@components/Carousel';
import { CardMovie } from '@components/CardMovie';
import { FilterButton } from '@components/CTAButton';

import FilterArrow from '@assets/catalogue-arrow-down.svg';

import {
  SelectBtn,
  ActiveIndicator,
  Button,
} from '@styles/components/CTAButton';
import { Container } from '@styles/pages/Catalogue';

export default function Catalogue() {
  const { addHomeID, homeID } = useHomeIndicator();

  const [toggleDropDown, setToggleDropDown] = useState(false);

  addHomeID('catalogue');

  const handleFilterDropDown = () => {
    setToggleDropDown(!toggleDropDown);
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
                <form>
                  <SelectBtn className='btn-black'>
                    <option disabled selected>
                      opções
                    </option>
                    <option value='volvo'>Volvo</option>
                    <option value='saab'>Saab</option>
                    <option value='fiat'>Fiat</option>
                    <option value='audi'>Audi</option>
                  </SelectBtn>
                </form>

                <ActiveIndicator className='btn-pink'>
                  Mais populares
                </ActiveIndicator>
              </div>

              <div className={`${toggleDropDown}`}>
                <FilterButton
                  onClick={handleFilterDropDown}
                  className='btn-black hvr-shrink hvr-icon-hang'
                  title='Em grid'
                  iconBefore={
                    <i className='hvr-icon'>
                      <FilterArrow />
                    </i>
                  }
                />

                <div className={'animate__animated animate__fadeInDown'}>
                  <span id='grid-layout'>Em grid</span>
                  <span id='list-layout'>Em lista</span>
                </div>
              </div>
            </div>

            <div>
              <CardMovie />
              <CardMovie />
              <CardMovie />
              <CardMovie />
              <CardMovie />
              <CardMovie />
              <CardMovie />
              <CardMovie />
            </div>

            <Button className='btn-pink hvr-shrink'>Carregar mais</Button>
          </div>
        </section>
      </Container>
    </>
  );
}
