import styled from 'styled-components';
import { opacify } from 'polished';

export const Container = styled.header`
  background: var(--black_212);
  border-bottom: 2px solid var(--black_000);
  -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
  box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

  > div {
    &:first-child {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      max-width: 1080px;
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

    &:last-child {
      width: 100%;
      border-top: 2px solid var(--black_000);

      &.false {
        opacity: 0;
        display: none;
      }

      form {
        padding: 20px;
        max-width: 1080px;
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
`;
