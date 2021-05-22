import styled from 'styled-components';

export const Container = styled.main`
  margin: min(9.3vw, 106px) auto 0;
  background: var(--background);

  > section {
    > div {
      max-width: 1200px;
      margin: auto;
      padding: 0 min(1.25rem, 1.57vw);
    }

    /* Section one */
    &:first-of-type {
      position: relative;
      z-index: 1;

      background: url('/assets/carousel-banner-background-dsk.png') center
        no-repeat;
      background-size: cover;

      > div > div {
        display: flex;
        justify-content: space-between;

        padding: min(7.5rem, 9.4vw) 0 min(10rem, 12.5vw);

        > div {
          &:first-of-type {
            min-width: max(15.625rem, 14.5vw);
            max-width: 334px !important;
            width: 100%;
          }

          &:last-of-type {
            max-width: max(46rem, 58vw);
            margin-left: min(4rem, 5vw);

            h1 {
              font-size: min(3.8rem, 4.7vw);
              font-weight: 700;
              line-height: 113.5%;
              color: var(--white_EAE);
            }

            > div {
              &:first-of-type {
                display: flex;
                justify-content: space-between;

                font-size: min(1.5rem, 1.9vw);
                font-weight: 300;
                color: var(--pink_FE3);
                margin: min(1.875rem, 2.4vw) 0 min(3.875rem, 4.9vw);

                span {
                  display: flex;

                  font-size: min(1.7rem, 2vw);
                  font-weight: 500;
                  color: var(--white_EAE);

                  svg {
                    font-size: min(1.9rem, 2.4vw);
                    color: var(--pink_FE3);
                    margin: 0 min(1rem, 1.3vw);
                  }
                }
              }

              &:last-of-type {
                span {
                  display: block;
                  font-size: min(1.5rem, 1.9vw);
                  font-weight: 600;
                  color: var(--white_EAE);
                  margin-bottom: min(1.25rem, 1.6vw);
                }

                p {
                  font-size: min(1.4rem, 1.8vw);
                  font-weight: 500;
                  line-height: 140.5%;
                  color: var(--gray_757);
                }
              }
            }
          }
        }
      }
    }

    /* Section two */
    &:last-of-type {
      > div {
        h4 {
          font-size: min(1.9rem, 2.4vw);
          font-weight: 600;
          color: var(--white_EAE);
          padding: min(1.25rem, 1.57vw) 0;
          margin-bottom: min(3.125rem, 3.9vw);

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

        > div {
          width: 100%;
        }

        a {
          display: flex;
          align-items: center;
          justify-content: center;

          width: min(10rem, 12.5vw);
          min-width: min(2.813rem, 3.5vw);
          height: min(2.8rem, 3.5vw);

          font-size: min(0.901rem, 1.1vw);
          font-weight: 600;
          text-transform: lowercase;

          color: var(--white_EAE);
          background: linear-gradient(
            0deg,
            var(--pink_FE3) 0%,
            var(--pink_FF0) 100%
          );
          border-radius: min(0.2rem, 0.3vw);

          padding: 5px;
          margin: min(5.5rem, 6.9vw) auto;
        }
      }
    }
  }
`;
