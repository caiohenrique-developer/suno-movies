import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;

  opacity: 0;
  cursor: pointer;
  border-radius: 0.4rem;
  padding: 0.6rem 0.4rem;
  transition: all 0.4s ease-in-out;
  background: ${opacify('0.1', 'rgba(255, 255, 255, 0.1)')};

  svg {
    opacity: 0.5;
    width: 1.475rem;
    transition: 0.2s;
  }

  &:hover {
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.5);

    svg {
      opacity: 0.8;
    }
  }
  &.animate__bounce {
    opacity: 1;
  }
`;
