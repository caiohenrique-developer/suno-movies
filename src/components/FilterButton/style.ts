import styled from 'styled-components';

import { TypeBtnColors, BaseBtnFilters } from '@styles/components/ButtonStyles';

export const Container = styled.section`
  position: relative;
  top: 0;
  z-index: 1;

  display: flex;
  /* justify-content: space-between; */

  /* max-height: min(2.813rem, 4vw); */

  > div:first-of-type {
    display: flex;
    margin-right: min(1.563rem, 3vw);
  }

  .MuiPaper-root {
    background-color: red;
    margin-top: 0;

    /* Filter button */
    .MuiButtonBase-root {
      ${TypeBtnColors}
      ${BaseBtnFilters}

      flex-direction: row-reverse;

      border-radius: 0.2rem;
      border-color: var(--gray_2E2);
      background: linear-gradient(
        0deg,
        var(--gray_2E2) 0%,
        var(--black_212) 100%
      );

      .MuiAccordionSummary-expandIconWrapper {
        position: relative;
        top: 2px;

        &.Mui-expanded {
          transform: rotateX(180deg);
        }

        .MuiSvgIcon-root {
          fill: var(--white_EAE);
          width: min(1.875rem, 2.5vw);
          height: min(1.875rem, 2.5vw);
          margin-left: -0.375rem;
          margin-right: 0.25rem;
          pointer-events: none;
        }
      }

      .MuiAccordionSummary-content {
        flex-grow: unset;

        .MuiTypography-root {
          font-family: 'Poppins', sans-serif;
          font-weight: 600;
          font-size: min(0.9rem, 1.1vw);
        }
      }

      &:not(.Mui-expanded) ~ .MuiCollapse-root {
        border-width: 0;
        margin: 0;
      }

      &.Mui-expanded ~ .MuiCollapse-root {
        /* filter options structure */
      }
    }

    /* Filter options */
    .MuiCollapse-root {
      max-width: min(10rem, 12.8vw);
      min-width: 124px;
      width: 100vw;
      max-height: 400px;

      margin-top: min(0.5rem, 0.8vw);
      background: var(--black_181);
      border: min(0.625rem, 1vw) solid var(--black_181);

      overflow: hidden;
      overflow-y: auto;
      transition: 0.4s linear;

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
    }
  }
`;

export const GenreActiveIndicator = styled.span`
  ${TypeBtnColors}
  ${BaseBtnFilters}

  cursor: unset;
  border-radius: 0.2rem;
  margin-left: min(1.563rem, 3vw);
`;
