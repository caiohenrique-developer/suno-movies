import styled, { css } from 'styled-components';
import { opacify } from 'polished';

import { HeaderProps } from '@utils/types/styles';

export const Container = styled.div<HeaderProps>`
  position: relative;
  z-index: 2;

  header {
    position: fixed;
    top: 0;
    z-index: 1;

    width: 100%;

    &#home {
      > div {
        border: 0;
        box-shadow: none;
        -webkit-box-shadow: none;
        background: transparent;

        button {
          background: ${opacify('0.1', 'rgba(254, 49, 137, 0)')};
          border-radius: 15px;
        }
      }
    }

    > div {
      background: var(--black_212);
      border-top: 2px solid var(--black_000);
      border-bottom: 2px solid var(--black_000);
      -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
      box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

      &:first-of-type {
        max-height: 108px;
        height: min(108px, 10vw);
        border-top: transparent;

        .headerContent {
          display: flex;
          align-items: center;
          justify-content: space-between;

          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 0 min(1.25rem, 1.57vw);

          &,
          & > div,
          & > div nav,
          & > div nav a {
            height: 100%;
          }

          > a {
            max-width: min(11.25rem, 14.1vw);
            min-width: 7rem;
            width: 100%;
            margin-right: 2rem;
          }

          div,
          nav,
          a {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          nav {
            a {
              padding: 0 0.6em;
              font-size: min(1rem, 3vw);
              text-transform: uppercase;
              color: var(--white_EAE);

              &.hvr-underline-from-center:before {
                height: 2px;
                background: var(--pink_FE3);
              }

              & + a {
                margin-left: 5px;
              }
            }
          }

          button {
            display: flex;

            border-radius: 0;
            margin-left: min(3rem, 3.8vw);
            padding: min(8px, 2vw);
            transition: 0.5s;

            svg {
              min-width: 14px;
              min-height: 14px;
              max-width: 30px;
              max-height: 30px;
              width: 2.9vw;
              height: 2.9vw;
            }

            &:hover {
              background: ${opacify('0.1', 'rgba(254, 49, 137, 0)')};
              border-radius: 15px;

              .hamburger-inner,
              .hamburger-inner:before,
              .hamburger-inner:after,
              svg g {
                stroke: ${opacify('0.5', 'rgba(254, 49, 137, 0)')};
                background: ${opacify(
                  '0.5',
                  'rgba(254, 49, 137, 0)',
                )} !important;
              }
            }

            &.is-active {
              .hamburger-inner,
              .hamburger-inner:before,
              .hamburger-inner:after,
              svg g {
                stroke: ${opacify('1', 'rgba(254, 49, 137, 0)')};
                background: ${opacify('1', 'rgba(254, 49, 137, 0)')} !important;
              }
            }
          }
        }
      }

      &:last-of-type {
        width: 100%;
        max-height: 100%;
        border-top: 0;
        overflow: hidden;
        transition: calc(var(--animate-duration) * 0.75);

        &.false {
          max-height: 0;
          transition: calc(var(--animate-duration) * 0.75)
            cubic-bezier(0.15, -0.4, 1, 0.01);
        }

        form {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 1.25rem max(1.25rem, 1.57vw) max(1.9rem, 2.4vw);

          input {
            display: block;
            width: 100%;
            padding: max(1.25rem, 1.57vw);
            background: transparent;
            border-bottom: 1px solid var(--pink_FE3);
            color: var(--white_EAE);
            font-size: min(2rem, 2.5vw);
            font-weight: 500;

            &::-webkit-input-placeholder {
              /* Edge */
              font-size: min(1rem, 2.5vw);
            }

            &:-ms-input-placeholder {
              /* Internet Explorer 10-11 */
              font-size: min(1rem, 2.5vw);
            }

            &::placeholder {
              font-size: min(1rem, 2.5vw);
            }
          }

          > span {
            display: grid;
            gap: min(2.5rem, 3.5vw) min(1.25rem, 1.57vw);
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

            max-height: 50vh;
            margin-top: 1.875rem;
            padding-right: min(1.25rem, 1.57vw);
            overflow-y: auto;

            &.one-result {
              padding-right: 0;
            }

            &.movie-card-max-vw > div {
              max-width: min(31.25rem, 64vw);
              width: max-content;
            }

            &::-webkit-scrollbar {
              width: 6px;
              height: 0;
            }

            &::-webkit-scrollbar-track {
              box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }

            &::-webkit-scrollbar-thumb {
              background: var(--gray_9F9);
              border-radius: 5px;
            }

            > div {
              background: var(--black_252);
              border: 1px solid var(--gray_313);
              border-radius: 5px;
              padding: min(1.25rem, 1.57vw);

              & + div {
                margin-top: 0;
              }

              section {
                /* &#mob > div > a > div {
                  border: 11px solid green !important;
                  border-radius: 5px;
                } */

                > a > div {
                  /* max-width: min(6.25rem, 8.3vw) !important;
                  max-height: min(9.25rem, 12vw); */
                  border: 11px solid green !important;
                  border-radius: 5px;
                }

                > div {
                  border: 11px solid green !important;
                  margin-left: min(1.27rem, 1.59vw);

                  h3 {
                    margin: min(0.625rem) 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  ${({ toggleDropDown }) =>
    toggleDropDown &&
    css`
      > span {
        position: fixed;
        top: 0;

        width: 100vw;
        height: 100vh;
        opacity: 0.8;
        background: var(--black_181);
        cursor: crosshair;
      }
    `};
`;
