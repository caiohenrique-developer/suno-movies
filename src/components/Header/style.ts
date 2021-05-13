import styled from 'styled-components';

export const Container = styled.header`
  background: var(--black_212);
  border-bottom: 3px solid var(--black_000);
  -webkit-box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);
  box-shadow: 0px 20px 20px 0px rgb(0 0 0 / 40%);

  > div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    max-width: 1080px;
    width: 100%;
    height: min(112px, 7rem);
    margin: 0 auto;

    > a {
      margin-right: 2rem;
    }

    nav,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    nav {
      position: relative;
      top: 3px;

      height: 100%;

      a {
        width: 112px;
        height: 100%;
        font-size: 1rem;
        text-transform: uppercase;
        color: var(--white_EAE);

        &.hvr-underline-from-center {
          &:before {
            height: 3px;
            background: var(--pink_FE3);
          }
        }

        & + a {
          margin-left: 5px;
        }
      }
    }

    button {
      margin-left: 3rem;

      &:hover {
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
`;
