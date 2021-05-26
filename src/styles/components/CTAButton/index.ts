import styled, { css } from 'styled-components';

const TypeBtnColors = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 50px;
  padding: min(0.8rem, 2vw) min(1.25rem, 2vw);
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

const BaseBtnFilters = css`
  display: block;
  width: min(10rem, 12.8vw);
  height: 100%;
  overflow: hidden;

  font-weight: 600;
  font-size: min(0.9rem, 1.1vw);
  text-transform: lowercase;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--white_EAE);
`;

export const Button = styled.button`
  ${TypeBtnColors}
  ${BaseBtnFilters}

  border-radius: min(0.2rem, 0.3vw);

  &:hover,
  &:focus {
    i {
      top: -4px;
    }
  }

  i {
    position: relative;

    width: min(0.875rem, 1.3vw);
    margin-right: min(0.75rem, 1.1vw);
  }
`;

export const OptionsList = styled.ul`
  max-height: 400px;

  padding: min(0.625rem, 1vw);
  padding-right: min(0.375rem, 0.6vw);
  margin-top: 0.313rem;
  background: var(--black_181);

  overflow: hidden;
  overflow-y: scroll;
  transition: calc(var(--animate-duration) * 0.75);

  &::-webkit-scrollbar {
    width: 4px;
    height: 0;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--gray_9F9);
    border-radius: 4px;
  }

  li {
    font-size: min(0.9rem, 1.1vw);
    text-transform: lowercase;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--white_EAE);

    & + li {
      border-top: 1px solid #000;
    }

    input {
      display: none;
    }

    label {
      display: block;
      width: 100%;
      text-align: center;
      padding: 5px 0;
      cursor: pointer;
      background: var(--gray_252);
    }
  }
`;

export const ActiveIndicator = styled.span`
  ${TypeBtnColors}
  ${BaseBtnFilters}
`;

export const Container = styled.a`
  ${TypeBtnColors}
`;
