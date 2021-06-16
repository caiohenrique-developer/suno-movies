import styled from 'styled-components';

export const Container = styled.main`
  margin: min(9.3vw, 106px) auto 0;

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

    /* last section */
    &:last-of-type {
      > div {
        max-width: 1200px;
        margin: auto;
        padding: min(2.5rem, 3.2vw) min(1.25rem, 1.57vw);

        > button {
          margin: 0 auto min(5rem, 6.6vw);
        }

        > div {
          &:first-of-type {
            position: relative;
            top: 0;
            z-index: 1;

            display: flex;
            justify-content: space-between;

            max-height: min(2.813rem, 3.8vw);

            > div {
              &:first-of-type .false > ul,
              &.false > ul {
                max-height: 0;

                &,
                li {
                  padding: 0;
                  margin: 0;

                  border: 0;
                  transition: calc(var(--animate-duration) * 0.75)
                    cubic-bezier(0.15, -0.4, 1, 0.01);
                }
              }

              &:first-of-type {
                display: flex;

                margin-right: min(1.563rem, 2vw);

                span {
                  cursor: unset;
                  border-radius: min(0.2rem, 0.3vw);
                  margin-left: min(1.563rem, 2vw);
                  text-align: center;
                  line-height: 95%;
                }
              }

              &:last-of-type {
                max-width: min(10rem, 12.8vw);
              }
            }
          }

          &:last-of-type {
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

                section > div:last-of-type {
                  width: 70%;
                }
              }
            }

            > div section > a {
              max-width: min(9.875rem, 12.7vw) !important;

              > div:first-of-type {
                max-height: min(14.375rem, 18.5vw);
              }
            }
          }
        }
      }
    }
  }
`;
