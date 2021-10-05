import styled from 'styled-components';

export const Container = styled.button`
  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;
  z-index: 2;

  width: 3.125rem;
  height: 3.125rem;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid #000;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.3s ease-in-out;
`;
