import styled from 'styled-components';

export const Container = styled.header`
  > div {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */

    max-width: 1080px;
    width: 100%;
    /* height: min(112px, 7rem); */
    margin: 0 auto;

    nav,
    a {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    nav {
      a {
        width: 112px;
        height: min(112px, 7rem);

        font-size: 1rem;
        text-transform: uppercase;
        color: var(--white_EAE);
        border-top: 3px solid transparent;
        border-bottom: 3px solid var(--pink_FE3);

        & + a {
          margin-left: 5px;
        }
      }
    }

    button {
      margin-left: 48px;
    }
  }
`;
