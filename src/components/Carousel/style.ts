import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin: min(3vw, 2.375rem) 0 min(10.3vw, 8.25rem);

  .carousel-arrow {
    position: absolute;
    top: 40%;
    transform: translateY(-60%);

    width: min(1.563rem, 2vw);
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s;

    &:hover {
      opacity: 1;
    }

    &.carousel-arrow-left {
      left: -10px;
    }
    &.carousel-arrow-right {
      right: -10px;
    }
  }

  .react-multi-carousel-container {
    max-width: 1210px;
    margin: auto;
  }

  .react-multi-carousel-list {
    .react-multi-carousel-item-card {
      padding: 0 min(1.563rem, 2.5vw);

      > div > section {
        display: block;

        > a > div:after {
          background-size: 5rem;
        }

        > div {
          margin-top: min(1rem, 1.5vw);
          margin-left: 0;

          h4,
          h3 {
            word-break: break-word;
          }

          h4 {
            font-size: min(1.4rem, 2vw);
          }

          h3 {
            font-size: min(1rem, 1.5vw);
          }

          span {
            font-size: min(1rem, 1.5vw);
            margin: 0;

            svg {
              position: relative;
              top: 0.125rem;
            }
          }
        }

        p {
          display: none;
        }
      }
    }
  }
`;
