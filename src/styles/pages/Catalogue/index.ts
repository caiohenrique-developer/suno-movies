import styled from 'styled-components';

export const Container = styled.main`
  margin: min(9.3vw, 106px) auto 0;

  > section {
    background: var(--black_212);

    /* first section */
    &:first-of-type {
      position: relative;
      z-index: 1;

      display: none;
      /* remove displey none */

      border-bottom: 2px solid var(--black_000);
      -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
      box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

      > div {
        padding-top: min(6.3vw, 5rem);

        > div,
        p {
          max-width: 1200px;
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

        > div {
          &:first-of-type {
            display: flex;
            justify-content: space-between;

            form select,
            span {
              display: block;
              width: min(10rem, 12.8vw);
              height: 100%;
              overflow: hidden;

              font-weight: 600;
              font-size: min(0.9rem, 1.1vw);
              text-transform: lowercase;
              text-overflow: ellipsis;
              line-height: 100%;
              white-space: nowrap;
              color: var(--white_EAE);
            }

            > div {
              display: flex;
              margin-right: min(1.563rem, 2vw);

              form {
                select {
                }
              }

              span {
                cursor: unset;
                border-radius: min(0.2rem, 0.3vw);
                margin-left: min(1.563rem, 2vw);
              }
            }

            form {
              select {
                /* For IE10 */
                &::-ms-expand {
                  display: none;
                }
                appearance: none;
                /* for Firefox */
                -moz-appearance: none;
                /* for Chrome */
                -webkit-appearance: none;

                text-align-last: center;
                border-radius: min(0.25rem, 0.3vw);

                option {
                  background: var(--black_212);
                }
              }
            }
          }

          &:last-of-type {
            margin: min(2.8rem, 3.5vw) 0 min(4.4rem, 5.5vw);
          }
        }
      }
    }
  }
`;
