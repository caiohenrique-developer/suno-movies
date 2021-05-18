import styled from 'styled-components';

export const Container = styled.footer`
  position: relative;
  bottom: 0;
  z-index: 1;

  background: var(--black_181);
  margin-top: -8px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1200px;
    width: 100%;
    height: min(112px, 7rem);
    margin: 0 auto;
    color: var(--white_EAE);
    font-size: min(18px, 3vw);
  }
`;
