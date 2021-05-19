import React, { useState } from 'react';
import Link from 'next/link';

import MediaQuery from 'react-responsive';

import { useHomeIndicator } from '@hooks/useHomeIndicator';
import { AppLogotipo } from '@components/AppLogotipo';
import MagnifyingGlass from '@assets/search-outline.svg';

import { Container } from './style';

export const Header = () => {
  const { homeID } = useHomeIndicator();

  const [toggleHeaderSearchBar, setToggleHeaderSearchBar] = useState(false);
  const [toggleMenuMob, setToggleMenuMob] = useState(false);

  const handleHeaderSearchBar = () => {
    setToggleHeaderSearchBar(!toggleHeaderSearchBar);
  };

  const handleMenuMob = () => {
    setToggleMenuMob(!toggleMenuMob);
  };

  return (
    <Container toggleDropDown={toggleHeaderSearchBar}>
      {/* Header segregation page and breakpoint */}
      <header id={homeID}>
        <div>
          {homeID ? (
            <div className='heanderContent'>
              <Link href='/'>
                <a className='hvr-shrink'>
                  <AppLogotipo />
                </a>
              </Link>

              <button
                className='hvr-grow'
                type='button'
                onClick={handleHeaderSearchBar}
              >
                <MagnifyingGlass />
              </button>
            </div>
          ) : (
            <div className='heanderContent'>
              {/* Mob */}
              <MediaQuery maxDeviceWidth={767}>
                {homeID ? (
                  <>
                    <Link href='/'>
                      <a className='hvr-shrink'>
                        <AppLogotipo />
                      </a>
                    </Link>

                    <button
                      className='hvr-grow'
                      type='button'
                      onClick={handleHeaderSearchBar}
                    >
                      <MagnifyingGlass />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`hamburger hamburger--slider-r ${
                        toggleMenuMob && 'is-active'
                      }`}
                      onClick={handleMenuMob}
                      type='button'
                    >
                      <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                      </span>
                    </button>

                    <Link href='/'>
                      <a className='hvr-shrink'>
                        <AppLogotipo />
                      </a>
                    </Link>

                    <button
                      className='hvr-grow'
                      type='button'
                      onClick={handleHeaderSearchBar}
                    >
                      <MagnifyingGlass />
                    </button>
                  </>
                )}
              </MediaQuery>

              {/* Tablet and up */}
              <MediaQuery minDeviceWidth={768}>
                <>
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
                      <Link href='/catalogue'>
                        <a className='hvr-underline-from-center'>Catálogo</a>
                      </Link>
                    </nav>

                    <button
                      className='hvr-grow'
                      type='button'
                      onClick={handleHeaderSearchBar}
                    >
                      <MagnifyingGlass />
                    </button>
                  </div>
                </>
              </MediaQuery>
            </div>
          )}
        </div>

        <div
          className={`animate__animated ${
            toggleHeaderSearchBar === true
              ? `animate__flipInX ${toggleHeaderSearchBar}`
              : `animate__flipOutX ${toggleHeaderSearchBar}`
          }`}
        >
          <form>
            <input type='text' placeholder='O que deseja assistir agora?' />

            <span>Resultado_da_pesquisa</span>
          </form>
        </div>
      </header>

      {/* header overlay */}
      <span onClick={handleHeaderSearchBar}></span>
    </Container>
  );
};
