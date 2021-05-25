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

        form select,
        > div:first-of-type span,
        button {
          display: block;
          width: min(10rem, 12.8vw);
          height: 100%;
          overflow: hidden;

          font-weight: 600;
          font-size: min(0.9rem, 1.1vw);
          text-transform: lowercase;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: var(--white_EAE);
        }

        button {
          margin: 0 auto min(5rem, 6.6vw);
          border-radius: min(0.2rem, 0.3vw);
        }

        > div {
          &:first-of-type {
            display: flex;
            justify-content: space-between;

            max-height: min(2.813rem, 3.8vw);

            > div {
              &:first-of-type {
                display: flex;

                margin-right: min(1.563rem, 2vw);

                span {
                  cursor: unset;
                  border-radius: min(0.2rem, 0.3vw);
                  margin-left: min(1.563rem, 2vw);
                  line-height: 95%;
                }
              }

              &:last-of-type {
                max-width: min(10rem, 12.8vw);

                &.true button i {
                  transform: translate3d(0, -50%, 0) rotate(180deg);
                }

                &.false > div {
                  max-height: 0;

                  &,
                  span {
                    padding: 0;
                    margin: 0;

                    border: 0;
                    transition: calc(var(--animate-duration) * 0.75)
                      cubic-bezier(0.15, -0.4, 1, 0.01);
                  }
                }

                button {
                  margin: 0;

                  i {
                    position: relative;
                    top: 0;

                    width: min(0.875rem, 1.3vw);
                    margin-right: min(0.75rem, 1.1vw);

                    transform: translate3d(0, -50%, 0) rotate(0deg);
                  }
                }

                > div {
                  max-height: 100px;

                  background: var(--black_181);

                  padding: min(0.625rem, 1vw);
                  margin-top: 0.313rem;

                  overflow: hidden;
                  transition: calc(var(--animate-duration) * 0.75);

                  span {
                    width: 100%;
                    text-align: center;
                    padding: 5px 0;
                    background: var(--gray_252);
                    cursor: pointer;

                    & + span {
                      border-top: 1px solid #000;
                    }
                  }
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
