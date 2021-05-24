import React from 'react';
import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import { breakpointCfg } from '@utils/general/carouselBreakpoint';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

export const CarouselContainer = () => {
  return (
    <Container>
      <Carousel
        showDots
        infinite
        // autoPlay
        centerMode
        responsive={breakpointCfg}
        containerClass='react-multi-carousel-container'
        sliderClass='react-multi-carousel-slider'
        dotListClass='react-multi-carousel-dot-list'
        itemClass='react-multi-carousel-item-card'
      >
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
        <div>
          <Image
            src='/assets/desk/catalogue/carousel-movie-thumbnail.png'
            alt='Movie thumbnail'
            width={219}
            height={329}
            objectFit='cover'
          />
          <div>
            <h4>Crazy About Her</h4>
            <h3>Romance, Comédia</h3>
            <span>
              <TiStarFullOutline />
              8.4
            </span>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};
