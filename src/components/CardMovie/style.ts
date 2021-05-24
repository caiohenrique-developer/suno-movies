import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: 38px;
  }

  > div {
    &:first-of-type {
      width: 158px;
    }

    &:last-of-type {
      max-width: 80%;
      margin-left: 28px;

      h4 {
        font-size: 21.15px;
        color: var(--white_EAE);
      }

      h3 {
        font-size: 15.39px;
        font-weight: 300;
        color: var(--pink_FE3);
      }

      span {
        display: block;
        margin: 12px 0 20px;
        font-size: 15.39px;
        color: var(--white_EAE);

        svg {
          font-size: 1rem;
          margin-right: 10px;
          color: var(--pink_FE3);
        }
      }

      p {
        font-size: 12.5px;
        font-weight: 300;
        color: var(--gray_9F9);
      }
    }
  }
`;
