import React from 'react';
import Link from 'next/link';

import RightArrow from '@assets/chevron-next-outline.svg';

import { Container } from './style';

import { ButtonBlackProps } from '@utils/types/components';

export const ButtonBlack = ({ title }: ButtonBlackProps) => {
  return (
    <Link href='/catalogue'>
      <Container className='hvr-shrink hvr-icon-grow hvr-icon-wobble-horizontal'>
        {title}
        <i className='hvr-icon'>
          <RightArrow />
        </i>
      </Container>
    </Link>
  );
};
