import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;

  opacity: 0;
  width: 4rem;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &.animate__bounce {
    opacity: 1;
  }
`;
