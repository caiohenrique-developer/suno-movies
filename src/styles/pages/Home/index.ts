import styled from 'styled-components';

export const Container = styled.main`
  margin-top: min(114px, 7.125rem);

  section {
    max-width: 1200px;
    margin: 0 auto;

    aside {
      position: fixed;
      top: max(50%, 30%);

      transform: translateY(min(-50%, -30%));
      padding: 20px;
      margin: 20px;
      color: var(--white_EAE);
      -webkit-backdrop-filter: blur(6px);
      backdrop-filter: blur(6px);
      background: rgba(0, 0, 0, 0.3);
      box-shadow: 5px 5px 5px var(--black_181);
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.15);

      h1 {
        font-size: min(44px, 2.75rem);
      }

      p {
        font-size: min(1rem, 1.625rem);
        margin: 10px 0 20px;
      }
    }
  }
`;
