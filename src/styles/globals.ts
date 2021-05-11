import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  /* Root variables */
  :root { --background:#121212; }

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

    body, input, textarea, select, button { font-weight: 400; }

    body {
      font-family: 'Poppins', sans-serif;
      background: var(--background);
      color: #ccc;

      button { cursor: pointer; }

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
    }
  }
`;
