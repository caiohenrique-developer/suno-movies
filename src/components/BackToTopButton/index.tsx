import React from 'react';

import Image from 'next/image';

import { Container } from './style';

export const BackToTopButton = (): JSX.Element => {
  return (
    <Container>
      <Image
        src='/assets/back-to-top-hand-mickey.png'
        alt='Back to top button'
        width='100%'
        height='100%'
        objectFit='contain'
      />
    </Container>
  );
};
