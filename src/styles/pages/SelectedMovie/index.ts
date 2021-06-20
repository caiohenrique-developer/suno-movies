import styled, { css } from 'styled-components';
import { ContainerProps } from '@utils/types/styles';

export const Container = styled.main<ContainerProps>`
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

      display: flex;
      align-items: center;
      flex-direction: column;

      > div {
        width: 100%;

        &:first-of-type {
          ${({ posterBkg }) =>
            posterBkg !== undefined &&
            css`
              opacity: 0.1;
              filter: brightness(0.8) blur(2px);
            `}
        }

        &:last-of-type {
          position: absolute;
          top: 0;
        }

        > div {
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
    }

    /* Section two */
    &:last-of-type {
      > div {
        display: flex;
        flex-direction: column;

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

        > iframe {
          display: block;
          width: 100%;
          max-height: min(36.25rem, 45.3vw);
        }

        a {
          font-size: min(0.901rem, 1.1vw);
          font-weight: 600;
          text-transform: lowercase;

          color: var(--white_EAE);
          border-radius: min(0.2rem, 0.3vw);

          padding: min(0.8rem, 1vw) min(3.7rem, 4.6vw);
          margin: min(5.5rem, 6.9vw) auto;
        }
      }
    }
  }
`;
