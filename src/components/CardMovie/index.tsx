import React from 'react';
import Image from 'next/image';

import { TiStarFullOutline } from 'react-icons/ti';

import { Container } from './style';

import { CardMovieProps } from '@utils/types/components';

export const CardMovie = ({ className }: CardMovieProps) => {
  return (
    <Container className={className}>
      <Image
        src='/assets/desk/catalogue/catalogue-movie-thumbnail.png'
        alt='Movie thumbnail'
        width={218}
        height={422}
        objectFit='cover'
      />
      <div>
        <h4>Goosebumps 2</h4>
        <h3>Comédia</h3>
        <span>
          <TiStarFullOutline />
          8.4
        </span>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.It is a long established fact that a reader
        </p>
      </div>
    </Container>
  );
};
