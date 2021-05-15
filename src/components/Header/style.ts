import styled from 'styled-components';
import { opacify } from 'polished';

export const Container = styled.div`
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
          /* justify-content: space-between; */

          max-width: 1200px;
          width: 100%;
          height: min(112px, 7rem);
          margin: 0 auto;
          padding: 0 20px;

          > a {
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
                padding: 2.8rem 10px;
                font-size: 1rem;
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
              margin-left: 3rem;
              padding: 10px;
              transition: 0.5s;

              &:hover {
                background: ${opacify('0.1', 'rgba(254, 49, 137, 0)')};
                border-radius: 15px;

                svg g {
                  opacity: 0.5;
                  stroke: var(--pink_FE3);
                }
              }

              &:focus {
                svg g {
                  opacity: 1;
                  stroke: var(--pink_FE3);
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
          padding: 20px;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;

          input {
            display: block;
            width: 100%;
            padding: 20px;
            background: transparent;
            border-bottom: 1px solid var(--pink_FE3);
            color: var(--white_EAE);
            font-size: 2rem;
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
            display: none;

            margin-top: 30px;
            font-size: 2rem;
            color: var(--white_EAE);
          }
        }
      }
    }
  }

  span {
    position: fixed;
    top: 0;

    width: 100vw;
    height: 100vh;
    opacity: 0.3;

    background: var(--pink_FE3);
  }
`;
