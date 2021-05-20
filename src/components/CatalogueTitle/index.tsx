import React from 'react';

import CatalogueTitleEllipse from '@assets/ellipse.svg';

import { Container } from './style';

import { CatalogueTitleProps } from '@utils/types/components';

export const CatalogueTitle = ({ title }: CatalogueTitleProps) => {
  return (
    <Container>
      <CatalogueTitleEllipse />
      {title}
    </Container>
  );
};
