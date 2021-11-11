import React from 'react';

import CatalogueTitleEllipse from '@assets/ellipse.svg';

import { CatalogueTitleProps } from '@utils/types/components';

import { Container } from './styles';

export const CatalogueTitle = ({ title }: CatalogueTitleProps): JSX.Element => {
  return (
    <Container>
      <CatalogueTitleEllipse />
      {title}
    </Container>
  );
};
