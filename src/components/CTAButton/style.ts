import styled from 'styled-components';

export const Container = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 50px;
  padding: min(0.8rem, 2vw) min(1.25rem, 2vw);
  cursor: pointer;
  border-radius: 8px;
  font-size: min(1rem, 1.3vw);
  transition: 0.8s;

  &.btn-black {
    background: linear-gradient(
      0deg,
      var(--gray_2E2) 0%,
      var(--black_212) 100%
    );
  }

  &.btn-pink {
    background: linear-gradient(0deg, var(--pink_FE3) 0%, var(--pink_FF0) 100%);
  }

  i {
    width: min(0.6rem, 1vw);
    min-width: 4px;
    margin-left: min(0.6rem, 1vw);

    svg {
      display: block;
    }
  }
`;
