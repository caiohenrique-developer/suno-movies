import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;

  width: 4rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: 0.2s;
    transform: translateY(-1rem);
  }
`;
