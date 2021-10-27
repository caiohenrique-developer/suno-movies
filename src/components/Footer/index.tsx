import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { BackToTopButton } from '@components/BackToTopButton';

import { Container } from './style';

export const Footer = (): JSX.Element => {
  const { route } = useRouter();

  const currentYear = new Date().getFullYear();
  const year = currentYear > 2021 ? `2021 - ${currentYear}` : currentYear;

  return (
    <>
      {route !== '/' && <BackToTopButton />}

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
