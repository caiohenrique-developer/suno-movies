import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: min(9.375rem, 11.6vw);
  min-width: 50px;
  width: 100%;
  padding: min(0.8rem, 2vw) min(1.25rem, 2vw);
  cursor: pointer;
  background: linear-gradient(0deg, var(--gray_2E2) 0%, var(--black_212) 100%);
  border-radius: 8px;
  border: 2px solid var(--black_2E2);
  font-size: min(1rem, 1.3vw);
  text-transform: uppercase;
  transition: 0.8s;

  &:hover {
    background: linear-gradient(0deg, var(--pink_FF5) 0%, var(--pink_FE3) 100%);
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
