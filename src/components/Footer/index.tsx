import React from 'react';

import Link from 'next/link';

import { Container } from './style';

export const Footer = (): JSX.Element => {
  return (
    <Container>
      <p>
        © 2021 Suno Movies, done with ♥ by
        <Link href='https://github.com/caiohenrique-developer/suno-movies'>
          <a href='dummy'>caiohenrique-developer</a>
        </Link>
        , all rights reserved.
      </p>
    </Container>
  );
};
