import React from 'react';
import Link from 'next/link';

import RightArrow from '@assets/chevron-next-outline.svg';

export const ButtonBlack = () => {
  return (
    <Link href='/'>
      <a className='hvr-shrink hvr-icon-grow hvr-icon-wobble-horizontal'>
        Catálogo
        <i className='hvr-icon'>
          <RightArrow />
        </i>
      </a>
    </Link>
  );
};
