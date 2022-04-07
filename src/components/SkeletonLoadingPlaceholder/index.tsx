import React from 'react';

import { Container } from '@components/SkeletonLoadingPlaceholder/styles';

export const SkeletonLoadingPlaceholder = (): JSX.Element => {
  return (
    <Container className='placeholder'>
      <div className='faux-image-wrapper shimmer'>
        <div className='faux-image' />
      </div>
      <div className='faux-text shimmer' />
      <div className='faux-text short shimmer' />
    </Container>
  );
};
