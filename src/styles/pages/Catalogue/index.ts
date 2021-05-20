import styled from 'styled-components';

export const Container = styled.main`
  margin: min(15vw, 8.125rem) auto 0;

  > section {
    background: var(--black_212);

    &:first-of-type {
      position: relative;
      z-index: 1;

      border-bottom: 2px solid var(--black_000);
      -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
      box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

      > div {
        > div,
        p {
          max-width: 1200px;
          margin: auto;
          padding: 0 min(1.25rem, 1.57vw);
        }

        &:first-of-type {
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

        &:last-of-type {
          padding: min(2.188rem, 2.8vw) 0;
        }
      }
    }

    &:last-of-type {
      font-size: 5rem;
    }
  }
`;
