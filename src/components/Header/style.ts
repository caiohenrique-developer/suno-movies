import styled, { css } from 'styled-components';
import { opacify } from 'polished';

import { HeaderProps } from '@utils/types/styles';

export const Container = styled.div<HeaderProps>`
  position: relative;
  z-index: 1;

  header {
    position: fixed;
    top: 0;
    z-index: 1;

    width: 100%;

    > div {
      background: var(--black_212);
      border-top: 2px solid var(--black_000);
      border-bottom: 2px solid var(--black_000);
      -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
      box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

      &:first-child {
        .heanderContent {
          display: flex;
          align-items: center;
          justify-content: space-between;

          max-width: 1200px;
          width: 100%;
          max-height: 112px;
          min-height: max(8.8vw, 7rem);
          margin: 0 auto;
          padding: 0 max(1.25rem, 1.57vw);

          > a {
            max-width: 11.25rem;
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

          div {
            nav {
              a {
                padding: 2.8rem 0.6em;
                font-size: min(1rem, 3vw);
                text-transform: uppercase;
                color: var(--white_EAE);

                &.hvr-underline-from-center {
                  &:before {
                    height: 2px;
                    background: var(--pink_FE3);
                  }
                }

                & + a {
                  margin-left: 5px;
                }
              }
            }

            button {
              border-radius: 0;
              margin-left: min(3rem, 3.8vw);
              padding: min(10px, 2vw);
              transition: 0.5s;

              svg {
                min-width: 12px;
                min-height: 12px;
                max-width: 30px;
                max-height: 30px;
                width: 1.9vw;
                height: 1.9vw;
              }

              &:hover {
                background: ${opacify('0.1', 'rgba(254, 49, 137, 0)')};
                border-radius: 15px;

                svg g {
                  stroke: ${opacify('0.5', 'rgba(254, 49, 137, 0)')};
                }
              }

              &:focus {
                svg g {
                  stroke: ${opacify('1', 'rgba(254, 49, 137, 0)')};
                }
              }
            }
          }
        }
      }

      &:last-child {
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
          padding: max(1.25rem, 1.57vw);

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
              font-size: 1rem;
            }

            &:-ms-input-placeholder {
              /* Internet Explorer 10-11 */
              font-size: 1rem;
            }

            &::placeholder {
              font-size: 1rem;
            }
          }

          span {
            display: block;
            display: none;

            margin-top: 30px;
            font-size: 2rem;
            color: var(--white_EAE);
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
