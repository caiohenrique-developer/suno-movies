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

      a {
        display: flex;
        align-items: center;

        max-width: 9.25rem;
        padding: 0.8rem 1.25rem;
        border-radius: 8px;
        font-size: 1rem;
        text-transform: uppercase;
        border: 2px solid var(--black_2E2);
        background: linear-gradient(
          0deg,
          var(--gray_2E2) 0%,
          var(--black_212) 100%
        );
        transition: 0.8s;

        &:hover {
          background: linear-gradient(
            0deg,
            var(--pink_FF5) 0%,
            var(--pink_FE3) 100%
          );
        }

        i {
          width: 0.6rem;
          margin-left: 0.6rem;

          svg {
            display: block;
          }
        }
      }
    }
  }
`;
