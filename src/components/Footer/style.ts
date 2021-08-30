import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  bottom: 0;
  z-index: 1;

  background: var(--black_181);
  margin-top: -8px;

  p {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    padding: 2.6rem;

    color: var(--white_EAE);
    font-size: min(18px, 3vw);
    text-align: center;

    a {
      color: var(--pink_FE3);

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
