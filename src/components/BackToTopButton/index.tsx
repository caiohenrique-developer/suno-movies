import React from 'react';

import Image from 'next/image';

import { Container } from './style';

export const BackToTopButton = (): JSX.Element => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className='back-to-top' onClick={handleClick}>
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
