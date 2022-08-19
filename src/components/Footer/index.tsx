import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Container } from '@components/Footer/styles';

export const Footer = (): JSX.Element => {
  const { route } = useRouter();

  const pageID = route === '/' ? 'home' : route.split('/')[1];

  const appCreatedAt = new Date('2021-06-01').getFullYear();
  const currentYear = new Date().getFullYear();
  const year =
    currentYear > appCreatedAt
      ? `${appCreatedAt} - ${currentYear}`
      : currentYear;

  return (
    <Container id={pageID}>
      <p>
        Copyright &copy; {year} Suno Movies, done with ☕ by:{' '}
        <Link href='https://github.com/caiohenrique-developer/suno-movies'>
          <a target='_blank' rel='noreferrer'>
            caiohenrique-developer
          </a>
        </Link>
        .
      </p>
    </Container>
  );
};
