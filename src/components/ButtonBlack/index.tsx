import React from 'react';
import Link from 'next/link';

import RightArrow from '@assets/chevron-next-outline.svg';

import { Container } from './style';

export const ButtonBlack = () => {
  return (
    <Link href='/'>
      <Container className='hvr-shrink hvr-icon-grow hvr-icon-wobble-horizontal'>
        Catálogo
        <i className='hvr-icon'>
          <RightArrow />
        </i>
      </Container>
    </Link>
  );
};
