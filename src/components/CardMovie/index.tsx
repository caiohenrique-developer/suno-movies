import React from 'react';
import Image from 'next/image';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

export const CardMovie = () => {
  return (
    <Container>
      <ul>
        <li>
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
        </li>
      </ul>
    </Container>
  );
};
