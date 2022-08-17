import React, {
  FormEvent,
  useCallback,
  useEffect,
  useState,
  MouseEvent,
  ChangeEvent,
} from 'react';
import MediaQuery from 'react-responsive';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Divide as Hamburger } from 'hamburger-react';

import { BackToTopButton } from '@components/Button/BackToTopButton';
import { MyButton } from '@components/Button/MyButton';
import { CardMovie } from '@components/CardMovie';
import { Container } from '@components/Header/styles';

import { fetchSearchMovie } from '@pages/api';
import { FetchMovieProps } from '@pages/api/_types';

import AppLogotipo from '@assets/app-logotipo.svg';
import MagnifyingGlass from '@assets/search-outline.svg';

export const Header = (): JSX.Element => {
  const { route } = useRouter();

  const pageID = route === '/' ? 'home' : route.split('/')[1];

  const [toggleHeaderSearchBar, setToggleHeaderSearchBar] = useState(false);
  const [toggleMenuMob, setToggleMenuMob] = useState(false);
  const [searchMovieApi, setSearchMovieApi] = useState<FetchMovieProps[]>([]);
  const [inputSearchMovie, setInputSearchMovie] = useState('');

  const handleHeaderSearchBar = useCallback(() => {
    setToggleHeaderSearchBar(!toggleHeaderSearchBar);

    if (toggleHeaderSearchBar) handleCollapse();
    else {
      setTimeout(() => {
        document.getElementById('input-search').focus();
      }, 888);
    }

    handleHeaderRemoveClass();
  }, [toggleHeaderSearchBar]);

  const handleMenuMob = useCallback(() => {
    setToggleMenuMob(!toggleMenuMob);

    if (toggleMenuMob) handleCollapse();

    handleHeaderRemoveClass();
  }, [toggleMenuMob]);

  useEffect(() => {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const backToTop = document.querySelector('.back-to-top');

    // Hide header component on scroll down or show it on scroll up
    const handleShowOrHideHeaderEffect = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      const catalogueList = document.getElementById('catalogue-list');
      const catalogueListPosition =
        catalogueList && Math.floor(catalogueList.getBoundingClientRect().top);

      header.className = 'animate__animated';
      backToTop.classList.add('animate__animated');

      if (st > lastScrollTop || catalogueListPosition === 0) {
        header.classList.add('animate__slideOutUp');
        backToTop.classList.add('animate__bounce');
      } else {
        header.classList.add('animate__slideInDown');
        backToTop.classList.remove('animate__bounce');
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    };

    // Add scroll event listener
    const handleScroll = () => {
      const headerHeight = header.offsetHeight + 200;
      const documentScrollTop = document.documentElement.scrollTop;

      if (
        toggleMenuMob === false &&
        toggleHeaderSearchBar === false &&
        documentScrollTop >= headerHeight
      ) {
        handleShowOrHideHeaderEffect();
      } else handleHeaderRemoveClass();
    };

    window.addEventListener('scroll', handleScroll, false);

    // Toggle input header search bar with ctrl+shift+F shortcut
    const handleInputSearchViewShortcut = (ev: KeyboardEvent) => {
      if ((ev.ctrlKey && ev.shiftKey && 'f'.toUpperCase()) === 'F') {
        handleHeaderSearchBar();
      }

      if (ev.key === 'Escape') handleCollapse();
    };

    window.addEventListener('keyup', handleInputSearchViewShortcut, false);

    // Remove events listeners
    const handleRemoveEventListeners = () => {
      window.removeEventListener('scroll', handleScroll, false);
      window.removeEventListener('keyup', handleInputSearchViewShortcut, false);
    };

    return handleRemoveEventListeners;
  }, [handleHeaderSearchBar, toggleHeaderSearchBar, toggleMenuMob]);

  const handleGetInputSearchVal = async (ev: ChangeEvent<HTMLInputElement>) => {
    ev.preventDefault();

    const { value: textVal } = ev.currentTarget;
    const movieResultContainer = document.querySelector(
      'header > div:last-of-type form span',
    );

    setInputSearchMovie(textVal);

    const movieResultCard = await fetchSearchMovie(textVal);

    setSearchMovieApi(movieResultCard || []);

    if (
      textVal &&
      movieResultContainer !== null &&
      movieResultCard.length === 1
    ) {
      const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0,
      );

      movieResultContainer.className = 'one-result';

      if (vw >= 768) movieResultContainer.classList.add('movie-card-max-vw');
    } else if (
      textVal &&
      movieResultContainer !== null &&
      movieResultCard.length > 1
    ) {
      movieResultContainer.removeAttribute('class');
    }
  };

  const handleCollapse = () => {
    // Reset header values
    setToggleHeaderSearchBar(false);
    setToggleMenuMob(false);

    setTimeout(() => {
      setSearchMovieApi([]);
      setInputSearchMovie('');
      document.getElementById('input-search').blur();
    }, 888);
  };

  const handleHeaderRemoveClass = () => {
    // Remove header attribute class
    document.querySelector('header').removeAttribute('class');
  };

  const handleScrollDownAnchor = (ev: MouseEvent<HTMLElement>) => {
    if (pageID === 'catalogue') {
      ev.preventDefault();

      const catalogueSection = document.getElementById('catalogue-list');

      catalogueSection.scrollIntoView({
        block: 'start', // Defines vertical alignment. default: start
        inline: 'center', // Defines horizontal alignment. default: nearest
        behavior: 'smooth', // Defines the transition animation. default: auto
      });
    }

    handleCollapse();
  };

  return (
    <>
      <Container id={pageID} toggleDropDown={toggleHeaderSearchBar}>
        {/* Header segregation page and breakpoint */}
        <header>
          <div>
            {/* Tablet and up */}
            {pageID === 'home' ? (
              <div className='headerContent'>
                <Link passHref href='/'>
                  <MyButton onClick={handleCollapse} className='hvr-shrink'>
                    <AppLogotipo />
                  </MyButton>
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
              </div>
            ) : (
              <div className='headerContent'>
                {/* Mob */}
                <MediaQuery maxWidth={767}>
                  {pageID === 'home' ? (
                    <>
                      <Link passHref href='/'>
                        <MyButton
                          onClick={handleCollapse}
                          className='hvr-shrink'
                        >
                          <AppLogotipo />
                        </MyButton>
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
                        type='button'
                        aria-controls='navigation'
                        aria-label='Show menu mobile'
                        disabled={toggleHeaderSearchBar}
                        className={`hamburger hamburger--collapse ${
                          toggleMenuMob && 'is-active'
                        }`}
                      >
                        <Hamburger
                          rounded
                          size={28}
                          color='#EAEAEA'
                          toggled={toggleMenuMob}
                          toggle={handleMenuMob}
                        />
                      </button>

                      <Link passHref href='/'>
                        <MyButton
                          onClick={handleCollapse}
                          className='hvr-shrink'
                        >
                          <AppLogotipo />
                        </MyButton>
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
                <MediaQuery minWidth={768}>
                  <>
                    <Link passHref href='/'>
                      <MyButton onClick={handleCollapse} className='hvr-shrink'>
                        <AppLogotipo />
                      </MyButton>
                    </Link>

                    <div>
                      <nav>
                        <Link passHref href='/'>
                          <MyButton
                            onClick={handleCollapse}
                            className='hvr-underline-from-center'
                          >
                            Início
                          </MyButton>
                        </Link>
                        <Link
                          passHref
                          href={
                            pageID === 'catalogue'
                              ? '#catalogue-list'
                              : 'catalogue'
                          }
                        >
                          <MyButton
                            onClick={handleScrollDownAnchor}
                            className='hvr-underline-from-center'
                          >
                            Catálogo
                          </MyButton>
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
                type='text'
                id='input-search'
                value={inputSearchMovie}
                onChange={handleGetInputSearchVal}
                placeholder='O que deseja assistir agora?'
              />

              {searchMovieApi.length > 0 && (
                <span>
                  {searchMovieApi.map(
                    ({ id, genre, title, poster, rating }) => (
                      <CardMovie
                        key={id}
                        movieID={id}
                        poster={poster}
                        title={title}
                        genre={genre}
                        rating={rating}
                        handleResetHeaderValues={handleCollapse}
                      />
                    ),
                  )}
                </span>
              )}
            </form>
          </div>

          {/* Mob */}
          <MediaQuery maxWidth={767}>
            {pageID !== 'home' && (
              <nav id='navigation'>
                <ul className={`${toggleMenuMob}`}>
                  <li>
                    <Link passHref href='/'>
                      <MyButton
                        onClick={handleCollapse}
                        className='hvr-underline-from-left'
                      >
                        Início
                      </MyButton>
                    </Link>
                  </li>
                  <li>
                    <Link
                      passHref
                      href={
                        pageID === 'catalogue' ? '#catalogue-list' : 'catalogue'
                      }
                    >
                      <MyButton
                        onClick={handleScrollDownAnchor}
                        className='hvr-underline-from-left'
                      >
                        Catálogo
                      </MyButton>
                    </Link>
                  </li>
                </ul>

                {/* Header menu-mob overlay */}
                <span
                  className={`${toggleMenuMob}`}
                  onClick={handleMenuMob}
                  aria-hidden='true'
                />
              </nav>
            )}
          </MediaQuery>
        </header>

        {/* Header search-bar overlay */}
        <span onClick={handleHeaderSearchBar} aria-hidden='true' />
      </Container>

      <BackToTopButton />
    </>
  );
};
