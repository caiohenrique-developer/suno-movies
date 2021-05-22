import React from 'react';
import Link from 'next/link';

import { Container } from './style';

import { CTAButtonProps } from '@utils/types/components';

export const CTAButton = ({ pageUrl, title, icon }: CTAButtonProps) => {
  return (
    <Link href={pageUrl}>
      <Container className='hvr-shrink hvr-icon-grow hvr-icon-wobble-horizontal'>
        {title}
        {icon}
      </Container>
    </Link>
  );
};
