import { fetchSearchMovie } from '@pages/api';

import React, { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

import MediaQuery from 'react-responsive';

import { usePageIndicator } from '@hooks/usePageIndicator';

import { AppLogotipo } from '@components/AppLogotipo';
import { CardMovie } from '@components/CardMovie';

import MagnifyingGlass from '@assets/search-outline.svg';

import { Container } from './style';

import { FetchMovieProps } from '@utils/types/api';
import { HeaderProps } from '@utils/types/components';

export const Header = () => {
  const { pageID } = usePageIndicator();

  const [toggleHeaderSearchBar, setToggleHeaderSearchBar] = useState(false);
  const [toggleMenuMob, setToggleMenuMob] = useState(false);
  const [searchMovieApi, setSearchMovieApi] = useState<FetchMovieProps[]>([]);
  const [inputSearchMovie, setInputSearchMovie] = useState('');

  useEffect(() => {
    const close = (ev: HeaderProps) => {
      if (ev.keyCode === 27) {
        handleCollapse();
      }
    };

    window.addEventListener('keyup', close);
    return () => window.removeEventListener('keyup', close);
  }, []);

  const handleGetInputSearchVal = async (
    ev: React.ChangeEvent<HTMLInputElement>,
  ) => {
    ev.preventDefault();

    const movieResultContainer = document.querySelector(
      'header > div:last-of-type form > span',
    );
    const { value: textVal } = ev.currentTarget;

    setInputSearchMovie(textVal);

    const movieResultCard = await fetchSearchMovie(textVal);
    textVal ? setSearchMovieApi(movieResultCard || []) : setSearchMovieApi([]);

    if (textVal !== '' && movieResultCard.length === 1) {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );

      movieResultContainer.className = 'one-result';

      if (vw >= 768) movieResultContainer.classList.add('movie-card-max-vw');
    } else movieResultContainer.removeAttribute('class');
  };

  const handleHeaderSearchBar = () => {
    setTimeout(() => {
      document.getElementById('input-search').focus();
    }, 888);

    setToggleHeaderSearchBar(!toggleHeaderSearchBar);

    if (toggleHeaderSearchBar === true) handleCollapse();
  };

  const handleMenuMob = () => {
    setToggleMenuMob(!toggleMenuMob);

    if (toggleMenuMob === true) handleCollapse();
  };

  const handleCollapse = () => {
    setToggleHeaderSearchBar(false);
    setToggleMenuMob(false);

    setTimeout(() => {
      setInputSearchMovie('');
      setSearchMovieApi([]);
    }, 888);
  };

  const handleScrollDownAnchor = () => {
    const catalogueListAnchor = document.getElementById('catalogue-list');

    if (pageID === 'catalogue') {
      catalogueListAnchor.addEventListener('click', () => {
        catalogueListAnchor.scrollIntoView({
          behavior: 'smooth', // Defines the transition animation. default: auto
          block: 'start', // Defines vertical alignment. default: start
          inline: 'center', // Defines horizontal alignment. default: nearest
        });
      });
    }

    handleCollapse();
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
                      <Link
                        href={
                          pageID === 'catalogue'
                            ? '#catalogue-list'
                            : 'catalogue'
                        }
                      >
                        <a
                          onClick={handleScrollDownAnchor}
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
          <form onSubmit={(ev: FormEvent) => ev.preventDefault()}>
            <input
              required
              autoFocus
              type='text'
              id='input-search'
              value={inputSearchMovie}
              onChange={handleGetInputSearchVal}
              placeholder='O que deseja assistir agora?'
            />

            <span>
              {searchMovieApi.map(({ id, genreIDs, title, poster, rating }) => {
                return (
                  <CardMovie
                    key={id}
                    movieID={id}
                    poster={poster}
                    title={title}
                    rating={rating}
                  />
                );
              })}
            </span>
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
                  <Link
                    href={
                      pageID === 'catalogue' ? '#catalogue-list' : 'catalogue'
                    }
                  >
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
