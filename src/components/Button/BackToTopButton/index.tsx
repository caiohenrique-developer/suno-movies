import React from 'react';

import ArrowUp from '@assets/catalogue-arrow-up.svg';

import { Container } from './styles';

export const BackToTopButton = (): JSX.Element => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container className='back-to-top' onClick={handleClick}>
      <ArrowUp />
    </Container>
  );
};
