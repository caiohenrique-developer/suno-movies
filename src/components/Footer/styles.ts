import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;

  p {
    padding: 2.6rem;

    color: var(--white_EAE);
    font-size: min(14px, 3vw);
    text-align: center;

    a {
      display: inline-block;
      color: var(--pink_FE3);

      &::after {
        content: '';

        display: block;
        width: 0;
        height: 1px;
        background: var(--pink_FF0);
        transition: 0.8s;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }
`;
