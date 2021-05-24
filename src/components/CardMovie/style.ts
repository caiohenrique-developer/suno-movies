import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: min(2.375rem, 3vw);
  }

  > div {
    &:first-of-type {
      max-width: min(9.875rem, 12.7vw) !important;
      min-width: min(5.5rem, 7.5vw);
      width: 100%;
    }

    &:last-of-type {
      margin-left: min(1.75rem, 2.8vw);

      h4 {
        font-size: min(1.4rem, 1.8vw);
        color: var(--white_EAE);
      }

      h3 {
        font-size: min(1rem, 1.4vw);
        font-weight: 300;
        color: var(--pink_FE3);
      }

      span {
        display: block;
        margin: min(0.8rem, 1.1vw) 0 min(1.25rem, 1.8vw);
        font-size: min(1rem, 1.4vw);
        color: var(--white_EAE);

        svg {
          font-size: min(1.1rem, 1.6vw);
          margin-right: min(0.6rem, 1vw);
          color: var(--pink_FE3);
        }
      }

      p {
        font-size: min(0.8rem, 1.1vw);
        font-weight: 300;
        color: var(--gray_9F9);
      }
    }
  }
`;
