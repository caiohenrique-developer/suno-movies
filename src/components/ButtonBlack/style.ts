import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  align-items: center;

  max-width: 9.25rem;
  padding: 0.8rem 1.25rem;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  border: 2px solid var(--black_2E2);
  background: linear-gradient(0deg, var(--gray_2E2) 0%, var(--black_212) 100%);
  transition: 0.8s;

  &:hover {
    background: linear-gradient(0deg, var(--pink_FF5) 0%, var(--pink_FE3) 100%);
  }

  i {
    width: 0.6rem;
    margin-left: 0.6rem;

    svg {
      display: block;
    }
  }
`;
