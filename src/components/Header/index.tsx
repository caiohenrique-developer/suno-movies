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
          <a className='hvr-shrink'>
            <AppLogotipo />
          </a>
        </Link>

        <div>
          <nav>
            <Link href='/'>
              <a className='hvr-underline-from-center'>Início</a>
            </Link>
            <Link href='888'>
              <a className='hvr-underline-from-center'>Catálogo</a>
            </Link>
          </nav>

          <button className='hvr-grow' type='button'>
            <MagnifyingGlass />
          </button>
        </div>
      </div>

      <div>
        <form>
          <input type='text' placeholder='O que deseja assistir agora?' />

          <span>Resultado_da_pesquisa</span>
        </form>
      </div>
    </Container>
  );
};
