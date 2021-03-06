import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin-bottom: min(10.3vw, 8.25rem);

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
    padding: 2.5rem 0;

    .react-multi-carousel-track {
      .react-multi-carousel-item-card {
        padding: 0 min(1.563rem, 2.5vw);

        > div > section {
          flex-direction: column;
          transition: 0.3s;

          &:hover {
            transform: scale(1.1);
          }

          > a > div {
            border-radius: 5px;

            &:after {
              background-size: 5rem;
            }
          }

          > div {
            margin-top: min(1rem, 1.5vw);

            h4,
            h3 {
              word-break: break-word;
            }

            h4 {
              white-space: nowrap;
              overflow: auto;
              font-size: min(1.4rem, 2vw);

              &::-webkit-scrollbar {
                width: 0;
                height: 2px;
              }

              &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
              }

              &::-webkit-scrollbar-thumb {
                background: var(--white_EAE);
                border-radius: 5px;
              }
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
  }
`;
