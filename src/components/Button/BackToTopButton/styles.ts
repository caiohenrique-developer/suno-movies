import { opacify } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: 0;
  width: 100%;
  height: 100%;
  max-width: 2.25rem;
  max-height: 2.438rem;
  cursor: pointer;
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  background: ${opacify('0.0', 'rgba(255, 255, 255, 0.1)')};

  > div svg {
    color: rgba(255, 255, 255, 0.5);
    height: 100% !important;
    transition: 0.4s;
  }

  > svg {
    position: absolute;

    opacity: 0.5;
    width: 0.888rem;
    transition: 0.2s;
  }

  &:hover {
    border-radius: 50%;
    transition: 0.2s ease-in-out;
    box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.5);
    -webkit-box-shadow: 0 0 8px 1px rgba(255, 255, 255, 0.5);

    > svg {
      opacity: 0.8;
    }
  }
  &.animate__bounce {
    opacity: 1;
  }
`;
