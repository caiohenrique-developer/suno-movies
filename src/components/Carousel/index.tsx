import React from 'react';
import Carousel, { ButtonGroupProps } from 'react-multi-carousel';

import { CardMovie } from '@components/CardMovie';

import ArrowLeft from '@assets/carousel-arrow-left.svg';
import ArrowRight from '@assets/carousel-arrow-right.svg';

import { useReqApi } from '@hooks/useReqApi';

import { breakpoint } from '@utils/general/breakpointCfg';

import { Container } from './styles';

const ButtonGroup = ({ previous, next }: ButtonGroupProps): JSX.Element => {
  const handleArrowClick = (ev: Event & { currentTarget: Element }) => {
    if (ev.currentTarget.classList.contains('carousel-arrow-right')) {
      next();
    } else {
      previous();
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
        responsive={breakpoint}
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
