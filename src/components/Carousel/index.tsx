import React from 'react';

import Carousel from 'react-multi-carousel';

import { CardMovie } from '@components/CardMovie';

import { breakpointCfg } from '@utils/general/carouselBreakpoint';

import ArrowRight from '@assets/carousel-arrow-right.svg';
import ArrowLeft from '@assets/carousel-arrow-left.svg';

import { Container } from './style';

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const {
    carouselState: { currentSlide },
  } = rest;

  return (
    <>
      <ArrowLeft
        className='carousel-arrow carousel-arrow-left'
        onClick={() => previous()}
      />
      <ArrowRight
        className='carousel-arrow carousel-arrow-right'
        onClick={() => next()}
      />
    </>
  );
};

export const CarouselContainer = () => {
  return (
    <Container>
      <Carousel
        showDots
        infinite
        // autoPlay
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
        responsive={breakpointCfg}
        containerClass='react-multi-carousel-container'
        sliderClass='react-multi-carousel-slider'
        dotListClass='react-multi-carousel-dot-list'
        itemClass='react-multi-carousel-item-card'
      >
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
        <CardMovie />
      </Carousel>
    </Container>
  );
};
