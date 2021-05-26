import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import MediaQuery from 'react-responsive';

import { usePageIndicator } from '@hooks/usePageIndicator';
import { AppLogotipo } from '@components/AppLogotipo';
import MagnifyingGlass from '@assets/search-outline.svg';

import { Container } from './style';

export const Header = () => {
  const { pageID } = usePageIndicator();

  const [toggleHeaderSearchBar, setToggleHeaderSearchBar] = useState(false);
  const [toggleMenuMob, setToggleMenuMob] = useState(false);

  useEffect(() => {
    const close = (ev) => {
      if (ev.keyCode === 27) {
        handleCollapse();
      }
    };

    window.addEventListener('keyup', close);
    return () => window.removeEventListener('keyup', close);
  }, []);

  const handleHeaderSearchBar = () => {
    setToggleHeaderSearchBar(!toggleHeaderSearchBar);
  };

  const handleMenuMob = () => {
    setToggleMenuMob(!toggleMenuMob);
  };

  const handleCollapse = () => {
    setToggleHeaderSearchBar(false);
    setToggleMenuMob(false);
  };

  return (
    <Container toggleDropDown={toggleHeaderSearchBar}>
      {/* Header segregation page and breakpoint */}
      <header id={pageID}>
        <div>
          {/* Tablet and up */}
          {pageID === 'home' ? (
            <div className='headerContent'>
              <Link href='/'>
                <a onClick={handleCollapse} className='hvr-shrink'>
                  <AppLogotipo />
                </a>
              </Link>

              <button
                className={`hvr-grow  ${toggleHeaderSearchBar && 'is-active'}`}
                type='button'
                onClick={handleHeaderSearchBar}
              >
                <MagnifyingGlass />
              </button>
            </div>
          ) : (
            <div className='headerContent'>
              {/* Mob */}
              <MediaQuery maxDeviceWidth={767}>
                {pageID === 'home' ? (
                  <>
                    <Link href='/'>
                      <a onClick={handleCollapse} className='hvr-shrink'>
                        <AppLogotipo />
                      </a>
                    </Link>

                    <button
                      className={`hvr-grow  ${
                        toggleHeaderSearchBar && 'is-active'
                      }`}
                      type='button'
                      onClick={handleHeaderSearchBar}
                    >
                      <MagnifyingGlass />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className={`hamburger hamburger--collapse ${
                        toggleMenuMob && 'is-active'
                      }`}
                      onClick={handleMenuMob}
                      type='button'
                      aria-label='Menu'
                      aria-controls='navigation'
                      disabled={toggleHeaderSearchBar}
                    >
                      <span className='hamburger-box'>
                        <span className='hamburger-inner'></span>
                      </span>
                    </button>

                    <Link href='/'>
                      <a onClick={handleCollapse} className='hvr-shrink'>
                        <AppLogotipo />
                      </a>
                    </Link>

                    <button
                      className={`hvr-grow ${
                        toggleHeaderSearchBar && 'is-active'
                      }`}
                      type='button'
                      onClick={handleHeaderSearchBar}
                      disabled={toggleMenuMob}
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
                    <a onClick={handleCollapse} className='hvr-shrink'>
                      <AppLogotipo />
                    </a>
                  </Link>

                  <div>
                    <nav>
                      <Link href='/'>
                        <a
                          onClick={handleCollapse}
                          className='hvr-underline-from-center'
                        >
                          Início
                        </a>
                      </Link>
                      <Link href='/selected-movie'>
                        {/* remove selected-movie and set the correct link */}
                        <a
                          onClick={handleCollapse}
                          className='hvr-underline-from-center'
                        >
                          Catálogo
                        </a>
                      </Link>
                    </nav>

                    <button
                      className={`hvr-grow  ${
                        toggleHeaderSearchBar && 'is-active'
                      }`}
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

        {/* Mob */}
        <MediaQuery maxDeviceWidth={767}>
          {pageID !== 'home' && (
            <nav id='navigation'>
              <ul className={`${toggleMenuMob}`}>
                <li>
                  <Link href='/'>
                    <a
                      onClick={handleCollapse}
                      className='hvr-underline-from-left'
                    >
                      Início
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='/catalogue'>
                    <a
                      onClick={handleCollapse}
                      className='hvr-underline-from-left'
                    >
                      Catálogo
                    </a>
                  </Link>
                </li>
              </ul>

              {/* Header menu-mob overlay */}
              <span
                className={`${toggleMenuMob}`}
                onClick={handleMenuMob}
              ></span>
            </nav>
          )}
        </MediaQuery>
      </header>

      {/* Header search-bar overlay */}
      <span onClick={handleHeaderSearchBar}></span>
    </Container>
  );
};
