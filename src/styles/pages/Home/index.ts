import styled from 'styled-components';

export const Container = styled.main`
  position: relative;

  margin-top: min(9vw, 7.125rem);
  max-height: 62vw;
  overflow: hidden;

  > div {
    width: 100%;
  }

  section {
    max-width: 1200px;
    margin: auto;

    aside {
      position: absolute;
      top: 50%;

      transform: translateY(-50%);
      padding: max(1.25rem, 1.57vw);
      margin: auto max(1.25rem, 1.57vw);
      color: var(--white_EAE);
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
      background: rgba(0, 0, 0, 0.2);
      box-shadow: 5px 5px 5px var(--black_181);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);

      h1 {
        font-size: min(3.5vw, 2.75rem);
      }

      p {
        font-size: min(1.7vw, 1.625rem);
        margin: 0.625rem 0 1.25rem;
      }
    }
  }
`;
