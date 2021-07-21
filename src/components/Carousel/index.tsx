import React from 'react';

import Carousel from 'react-multi-carousel';

import { useReqApi } from '@hooks/useReqApi';

import { CardMovie } from '@components/CardMovie';

import { breakpointCfg } from '@utils/general/carouselBreakpoint';

import ArrowRight from '@assets/carousel-arrow-right.svg';
import ArrowLeft from '@assets/carousel-arrow-left.svg';

import { Container } from './style';

const ButtonGroup = (props) => {
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

export const CarouselContainer = () => {
  const { movieDiscoverApi, genreApi } = useReqApi();

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
        {movieDiscoverApi.map(
          ({ id, genreIDs, title, poster, description, rating }) => {
            const genres = genreApi
              .filter(({ id }) => genreIDs.includes(id))
              .map(({ genreName }) => genreName)
              .join(', ');

            return (
              <CardMovie
                key={id}
                movieID={id}
                poster={poster}
                title={title}
                genres={genres}
                description={description}
                rating={rating}
              />
            );
          },
        )}
      </Carousel>
    </Container>
  );
};
