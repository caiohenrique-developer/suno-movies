import styled from 'styled-components';

export const Container = styled.main`
  > section {
    background: var(--black_212);

    /* first section */
    &:first-of-type {
      position: relative;
      z-index: 1;

      border-bottom: 2px solid var(--black_000);
      -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
      box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

      > div {
        padding-top: min(6.3vw, 5rem);

        > div {
          max-width: 1333px;
        }

        p {
          max-width: 1200px;
        }

        > div,
        p {
          margin: auto;
          padding: 0 min(1.25rem, 1.57vw);
        }

        &:first-of-type {
          background: url('/assets/carousel-banner-background-dsk.png') center
            no-repeat;
          background-size: cover;

          &:after {
            content: '';

            display: block;
            height: 1px;
          }
        }

        &#catalogue-list {
          padding: min(2.188rem, 2.8vw) 0;
          border-top: min(0.188rem, 0.4vw) solid var(--pink_FE3);
        }
      }
    }

    /* last section */
    &:last-of-type > div {
      max-width: 1200px;
      margin: auto;
      padding: min(2.5rem, 3.2vw) min(1.25rem, 1.57vw);

      > button {
        margin: 0 auto min(5rem, 6.6vw);
      }

      > div:last-of-type {
        overflow: hidden;
        margin: min(2.8rem, 3.5vw) 0 min(4.4rem, 5.5vw);

        &.grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: min(2.5rem, 3.3vw) min(1.875rem, 2.5vw);

          > div {
            & + div {
              margin-top: 0;
            }
          }
        }

        > div section > a {
          max-width: min(9.875rem, 12.7vw) !important;
          min-width: 124px;
          max-height: min(14.375rem, 18.5vw);
          margin-right: min(1.75rem, 2.8vw);
        }
      }
    }
  }
`;
