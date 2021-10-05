import React from 'react';

import Link from 'next/link';

import { BackToTopButton } from '@components/BackToTopButton';

import { Container } from './style';

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  const year = currentYear > 2021 ? `2021 - ${currentYear}` : currentYear;

  return (
    <>
      <BackToTopButton />

      <Container>
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
    </>
  );
};
