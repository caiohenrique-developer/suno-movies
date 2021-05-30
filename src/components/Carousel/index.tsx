import { fetchMovieDiscover } from 'services/api';

import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';

import { CardMovie } from '@components/CardMovie';

import { breakpointCfg } from '@utils/general/carouselBreakpoint';
import { FetchMovieDiscoverProps } from '@utils/types/services';

import ArrowRight from '@assets/carousel-arrow-right.svg';
import ArrowLeft from '@assets/carousel-arrow-left.svg';

import { Container } from './style';

const ButtonGroup = (props) => (
  <>
    <ArrowLeft
      className='carousel-arrow carousel-arrow-left'
      onClick={() => props.previous()}
    />
    <ArrowRight
      className='carousel-arrow carousel-arrow-right'
      onClick={() => props.next()}
    />
  </>
);

export const CarouselContainer = () => {
  const [movieDiscover, setMovieDiscover] = useState<FetchMovieDiscoverProps[]>(
    [],
  );

  useEffect(() => {
    const Movies = async () => {
      setMovieDiscover(await fetchMovieDiscover());
    };

    Movies();
  }, []);

  return (
    <Container>
      <Carousel
        infinite
        // autoPlay
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        responsive={breakpointCfg}
        containerClass='react-multi-carousel-container'
        sliderClass='react-multi-carousel-slider'
        dotListClass='react-multi-carousel-dot-list'
        itemClass='react-multi-carousel-item-card'
      >
        {movieDiscover.map(({ id, title, poster, description, average }) => (
          <CardMovie key={id} poster={poster} />
        ))}
      </Carousel>
    </Container>
  );
};
