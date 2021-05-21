import styled from 'styled-components';

export const Container = styled.main`
  margin: min(9.3vw, 106px) auto 0;
  background: var(--black_212);

  > section {
    > div {
      max-width: 1200px;
      margin: auto;
    }

    /* Section one */
    &:first-of-type {
      position: relative;
      z-index: 1;

      background: url('/assets/carousel-banner-background-dsk.png') center
        no-repeat;
      background-size: cover;

      > div > div {
        /* Conteúdo */
      }
    }
  }

  /* Section two */
  &:last-of-type {
    color: tomato;

    &:after {
      content: '';

      display: block;
      height: min(0.188rem, 0.4vw);
      background: linear-gradient(
        80deg,
        var(--pink_FF5) 0%,
        var(--pink_FE3) 100%
      );
    }
  }
`;
