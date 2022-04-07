import React from 'react';

import { Container } from '@components/CatalogueTitle/styles';

import CatalogueTitleEllipse from '@assets/ellipse.svg';

import { CatalogueTitleProps } from '@utils/types/components';

export const CatalogueTitle = ({ title }: CatalogueTitleProps): JSX.Element => {
  return (
    <Container>
      <CatalogueTitleEllipse />
      {title}
    </Container>
  );
};
