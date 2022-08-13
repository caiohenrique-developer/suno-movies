import { opacify } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { responsive } from '@styles/responsive';

export default createGlobalStyle`
  /* Root variables */
  :root {
    /* Colors */
    --gray_2E2:#2E2D31;
    --gray_313:#313136;
    --gray_252:#252529;

    --white_FFF:#FFFFFF;
    --white_EAE:#EAEAEA;
    --gray_9F9:#9F9FA0;
    --gray_757:#757575;

    --black_212:#212125;
    --black_252:#252529;
    --black_181:#18181C;
    --background:#1B1B1F;
    --black_000:#000000;

    --pink_FF5:#FF559E;
    --pink_FE3:#FE3189;
    --pink_FF0:#FF006E;
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;

    font: 'Poppins', sans-serif 1rem;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  html {
    @media(max-width: 1080px) { font-size: 93.75%; }

    @media(max-width: 720px) { font-size: 87.5%; }

    body, input, textarea, select, button {
      font-weight: 400;

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        box-shadow: 0 0 0 1000px #ffffff00 inset;
        transition: 5000s ease-in-out 0s;
      }
    }

    body {
      font-family: 'Poppins', sans-serif;
      background: var(--background);

      #__next {
        position: relative;
        height: 100vh;

        main:not(#home) ~ footer {
          background: var(--black_181);
        }

        footer {
          position: absolute;
          bottom: 0;
        }
      }

      &::-webkit-scrollbar {
        width: 8px;
        height: 0;
      }

      &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      }

      &::-webkit-scrollbar-thumb {
        background: ${opacify('0.3', 'rgba(254, 49, 137, 0)')};
        border-radius: 5px;
      }

      button {
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        background: transparent
      }

      [disabled] {
        opacity: 0.5;
        cursor: not-allowed;
      }

      h1, h2, h3, h4, h5, h6, strong { font-weight: 600; }

      ol, ul { list-style: none; }

      a {
        color: inherit;
        text-decoration: none;
      }

      /* Responsive layout */
      ${responsive}
    }
  }
`;
