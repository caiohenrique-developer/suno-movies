import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  margin: min(3vw, 2.375rem) 0 min(10.3vw, 8.25rem);

  /* .carousel-button-group { */

  .carousel-arrow {
    /* position: relative; */

    position: absolute;
    top: 40%;
    transform: translateY(-60%);

    /* display: flex;
    justify-content: space-between; */

    /* width: 100%; */

    /* display: block; */
    width: min(1.563rem, 2vw);
    cursor: pointer;

    &.carousel-arrow-left {
      left: -10px;
      /* left: -0px; */
    }
    &.carousel-arrow-right {
      /* right: -40px; */
      right: -10px;
    }
  }
  /* } */

  .react-multi-carousel-container {
    /* z-index: 1; */
    max-width: 1210px;
    margin: auto;
  }

  .react-multi-carousel-slider {
    /* padding-left: 100px; */
  }

  .react-multi-carousel-list {
    .react-multi-carousel-item-card {
      padding: 0 min(1.563rem, 2.5vw);

      > div {
        display: block;

        > div {
          &:first-of-type {
          }

          &:last-of-type {
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

            p {
              display: none;
            }
          }
        }
      }
    }
  }
`;
