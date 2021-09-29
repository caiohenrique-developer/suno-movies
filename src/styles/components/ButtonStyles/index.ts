import styled, { css } from 'styled-components';

export const TypeBtnColors = css`
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: min(10rem, 12.8vw);
  min-width: 124px;
  width: 100vw;
  max-height: min(2.813rem, 3.8vw);
  min-height: 35px;
  height: 100vh;

  cursor: pointer;
  border: 2px solid;
  border-radius: 8px;
  font-size: min(1rem, 1.3vw);
  transition: 0.8s;

  &.btn-black {
    border-color: var(--gray_2E2);
    background: linear-gradient(
      0deg,
      var(--gray_2E2) 0%,
      var(--black_212) 100%
    );
  }

  &.btn-pink {
    border-color: var(--pink_FE3);
    background: linear-gradient(0deg, var(--pink_FE3) 0%, var(--pink_FF0) 100%);
  }

  i {
    display: inline-block;
    width: min(0.6rem, 1vw);
    min-width: 4px;

    svg {
      display: block;
    }
  }
`;

export const BaseBtnFilters = css`
  font-weight: 600;
  font-size: min(0.9rem, 1.1vw);
  text-transform: lowercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--white_EAE);

  overflow: hidden;
`;

export const Button = styled.button`
  ${TypeBtnColors}
  ${BaseBtnFilters}

  border-radius: 0.2rem;
`;

export const Container = styled.a`
  ${TypeBtnColors}
`;
