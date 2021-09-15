import React from 'react';
import Carousel from 'react-multi-carousel';

import { CardMovie } from '@components/CardMovie';

import { useReqApi } from '@hooks/useReqApi';

import ArrowLeft from '@assets/carousel-arrow-left.svg';
import ArrowRight from '@assets/carousel-arrow-right.svg';

import { breakpointCfg } from '@utils/general/carouselBreakpoint';

import { Container } from './style';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ButtonGroup = (props: any) => {
  const handleArrowClick = (ev: Event & { currentTarget: Element }) => {
    if (ev.currentTarget.classList.contains('carousel-arrow-right')) {
      props.next();
    } else {
      props.previous();
    }
  };

  return (
    <>
      <ArrowLeft
        className='carousel-arrow carousel-arrow-left'
        onClick={handleArrowClick}
      />
      <ArrowRight
        className='carousel-arrow carousel-arrow-right'
        onClick={handleArrowClick}
      />
    </>
  );
};

export const CarouselContainer = (): JSX.Element => {
  const { movieDiscoverApi } = useReqApi();

  return (
    <Container>
      <Carousel
        infinite
        autoPlay
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<ButtonGroup />}
        responsive={breakpointCfg}
        containerClass='react-multi-carousel-container'
        sliderClass='react-multi-carousel-slider'
        dotListClass='react-multi-carousel-dot-list'
        itemClass='react-multi-carousel-item-card'
      >
        {movieDiscoverApi.map(
          ({ id, genre, title, poster, description, rating }) => (
            <CardMovie
              key={id}
              movieID={id}
              poster={poster}
              title={title}
              genre={genre}
              description={description}
              rating={rating}
            />
          ),
        )}
      </Carousel>
    </Container>
  );
};
