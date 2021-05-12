import React from 'react';
import Link from 'next/link';

import AppLogotipo from '@assets/app-logotipo.svg';
import MagnifyingGlass from '@assets/search-outline.svg';

import { Container } from './style';

export const Header = () => {
  return (
    <Container>
      <div>
        <Link href='/'>
          <a>
            <AppLogotipo />
          </a>
        </Link>

        <nav>
          <Link href='/'>
            <a>Início</a>
          </Link>
          <Link href='888'>
            <a>Catálogo</a>
          </Link>
        </nav>

        <button type='button'>
          <MagnifyingGlass />
        </button>
      </div>
    </Container>
  );
};
