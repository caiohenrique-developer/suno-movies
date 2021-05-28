import React from 'react';

import Carousel from 'react-multi-carousel';

import { CardMovie } from '@components/CardMovie';

import { breakpointCfg } from '@utils/general/carouselBreakpoint';

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
