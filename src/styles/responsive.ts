import { css } from 'styled-components';

export const responsive = css`
  /* Desktop */
  @media screen and (min-width: 1024px) {
  }
  /* Tablet */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  /* Mobile */
  @media screen and (max-width: 767px) {
    #__next {
      .back-to-top {
        padding: 0.5rem 0.4rem;

        svg {
          width: 1.4rem;
        }
      }

      // Card movie
      #mob {
        > div {
          display: flex;

          width: 100%;
          margin-left: 0;

          > a > div {
            max-height: 100%;
            border-radius: 5px;
            transition: 0.5s;

            &:after {
              background-size: 5.5rem;
            }
          }

          > div {
            width: 100%;

            h4 {
              font-size: min(1.25rem, 5vw);
            }

            h3 {
              font-size: min(0.75rem, 3.5vw);
              word-break: break-word;
              margin: min(0.625rem, 3.5vw) 0;
            }

            span {
              font-size: min(0.75rem, 3.5vw);

              svg {
                position: relative;
                top: 2px;

                font-size: 0.9rem;
                margin-right: min(0.625rem, 3.5vw);
              }
            }
          }
        }

        p {
          font-size: min(0.75rem, 3.5vw);
          margin-top: max(1.25rem, 1.57vw);
        }
      }

      > div:first-of-type {
        header {
          > div {
            &:first-of-type {
              height: 55px;

              .headerContent {
                padding: 0 max(1.25rem, 1.57vw);

                > a {
                  max-width: 150px;
                }

                button {
                  &:disabled {
                    .hamburger-react {
                      pointer-events: none;
                    }

                    .hamburger-react div,
                    svg g {
                      stroke: rgb(234, 234, 234);
                      background: rgb(234, 234, 234) !important;
                    }
                  }

                  &.hamburger {
                    padding: 0;
                    border-radius: 0;
                    transform: scale(0.6);

                    &:hover,
                    &.is-active {
                      transform: scale(0.7);
                    }

                    .hamburger-react div {
                      &:nth-of-type(even) {
                        left: 28% !important;
                      }
                      &:nth-of-type(odd) {
                        left: 0 !important;
                      }
                    }
                  }

                  &:not(&.hamburger) {
                    margin-right: min(1.25rem, 1.57vw);
                  }
                }
              }
            }

            &:last-of-type {
              margin-top: -1px;

              form {
                padding-left: 2rem;
                padding-right: 2rem;

                > span > div {
                  padding: max(1.25rem, 1.57vw);

                  #mob > div {
                    > a {
                      max-width: 7.5rem;
                      max-height: 11.15rem;
                      margin-right: 1.45rem;
                    }

                    > div {
                      h4 {
                        font-size: 1.6rem;
                      }

                      span {
                        font-size: 0.85rem;

                        svg {
                          font-size: 1rem;
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          &:not(#home) {
            > div .headerContent {
              > a {
                margin: 0 2rem 0 1rem;
              }

              button {
                margin: 0;
                background: transparent;
              }
            }

            #navigation {
              ul {
                position: fixed;
                top: 54px;
                z-index: 1;

                min-width: 30%;
                max-height: 100%;
                height: 100vh;
                overflow: hidden;
                padding: max(1.25rem, 1.57vw) max(1.65rem, 1.57vw);
                background: var(--background);
                border-radius: 0 50px 50px 0;
                border-right: 1px solid var(--gray_313);
                transition: calc(var(--animate-duration) * 0.75);

                &.false {
                  max-width: 0;
                  max-height: 0;
                  padding: 0;
                  transition: calc(var(--animate-duration) * 0.75)
                    cubic-bezier(0.15, -0.4, 1, 0.01);
                }

                li {
                  a {
                    display: table;
                    font-size: 0.8rem;
                    text-transform: uppercase;
                    color: var(--white_EAE);
                    padding: 10px 10px 5px 0;

                    & + a {
                      margin-top: 10px;
                    }

                    &:before {
                      height: 2px;
                      background: var(--pink_FE3);
                    }
                  }
                }
              }

              span.true {
                position: fixed;
                top: 54px;

                width: 100vw;
                height: 100vh;
                opacity: 0.8;
                background: var(--black_181);
                cursor: crosshair;
              }
            }
          }
        }
      }

      main {
        &:not(#home) {
          margin-top: 54px;
        }

        &#home {
          section,
          aside {
            display: flex;
            justify-content: center;
          }

          section {
            position: relative;
            z-index: 1;

            background: #040714;
            margin-top: -8px;

            aside {
              position: static;

              align-items: center;
              flex-direction: column;

              text-align: center;

              h1 {
                font-size: min(4.5vw, 2.75rem);
              }

              p {
                font-size: min(2.7vw, 1.625rem);
              }

              a {
                min-width: 100%;
                font-size: min(1rem, 2.3vw);
                padding: min(1.8rem, 3vw) 20px;
              }
            }
          }
        }

        &#catalogue {
          > section {
            // first section
            &:first-of-type {
              > div {
                &:first-of-type {
                  > div > div {
                    max-width: 220px;
                    margin: min(3vw, 2.375rem) auto min(10.3vw, 8.25rem);

                    .carousel-arrow {
                      width: 0.938rem;

                      &.carousel-arrow-left {
                        left: -40px;
                      }

                      &.carousel-arrow-right {
                        right: -40px;
                      }
                    }

                    .react-multi-carousel-container {
                      padding: 0;

                      .react-multi-carousel-item-card {
                        padding: 0;

                        #mob {
                          &:hover {
                            transform: unset;
                          }

                          > div {
                            flex-direction: column;

                            > a {
                              margin: 0.625rem 0.313rem 1.25rem;

                              > div {
                                padding: 0.625rem 1.875rem;
                              }
                            }

                            > div {
                              h4 {
                                font-size: 1.25rem;
                              }

                              h3 {
                                font-size: 0.875rem;
                                margin: 0;
                              }

                              span {
                                font-size: 0.875rem;

                                svg {
                                  font-size: 1rem;
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }

                p {
                  font-size: min(1rem, 4.5vw);
                  text-align: center;

                  svg {
                    min-width: min(0.9rem, 3.5vw);
                    margin-right: min(1rem, 3.6vw);
                  }
                }
              }
            }

            // last section
            &:last-of-type {
              > div {
                padding: min(1.875rem, 5vw) max(1.25rem, 1.57vw);
                max-width: 95%;

                > button {
                  font-size: min(0.75rem, 4vw);
                }

                > section {
                  max-height: 100%;

                  > div {
                    justify-content: center;

                    width: 100%;
                    max-width: 100%;
                    max-height: min(2.525rem, 11vw);

                    margin-right: 0;

                    span,
                    > div,
                    > div > div {
                      width: 100%;
                      max-width: unset;
                      margin-left: 0;
                    }

                    > div {
                      margin-right: 2rem;
                    }

                    span,
                    .MuiTypography-root {
                      font-size: min(0.75rem, 4vw);
                    }

                    .MuiPaper-root {
                      .MuiSvgIcon-root {
                        width: min(1.4rem, 8vw);
                        height: min(1.4rem, 8vw);
                      }

                      &:not(.Mui-expanded) .MuiCollapse-root {
                        border-width: 0;
                        margin: 0;
                      }

                      .MuiCollapse-root {
                        margin-top: 4px;
                        border-width: min(0.625rem, 2vw);

                        label {
                          font-size: min(0.625rem, 3vw);
                        }
                      }
                    }
                  }
                }

                > div {
                  max-height: 100%;

                  &:last-of-type {
                    grid-template-columns: 1fr;
                    margin: min(2.25rem, 10.8vw) 0 min(5rem, 22.9vw);

                    > div + div {
                      margin-top: min(2.5rem, 12vw);
                    }

                    #mob {
                      display: block;

                      > div {
                        > a,
                        > div {
                          width: 50%;
                        }

                        > a {
                          max-height: min(28rem, 55.3vw);
                          margin-right: 2.1rem;

                          &:hover > div {
                            border-radius: 5px;
                          }

                          > div {
                            width: 100%;
                            border-radius: unset;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        &#selected-movie {
          section {
            // first section
            &:first-of-type {
              padding: 0 max(1.25rem, 1.57vw);

              > div > div {
                display: block;
                padding-top: min(3rem, 13.6vw);

                > div {
                  &:first-of-type {
                    display: block !important;

                    margin: auto !important;
                    max-width: 100% !important;
                    max-height: 100vh;
                    height: 70vh;
                  }

                  &:last-of-type {
                    margin-left: 0;

                    h1 {
                      font-size: min(2rem, 8vw);
                      margin: min(2rem, 8vw) 0 min(0.7rem, 3vw);
                    }

                    > div {
                      &:first-of-type {
                        font-size: min(1.2rem, 4.7vw);
                        margin: min(1.875rem, 2.4vw) 0 min(2.9rem, 11.2vw);

                        span {
                          align-items: center;

                          font-size: min(1.3rem, 5vw);

                          svg {
                            font-size: min(1.5rem, 5.5vw);
                            margin: 0 min(0.8rem, 2.8vw);
                          }
                        }
                      }

                      &:last-of-type {
                        span {
                          font-size: min(1.5rem, 5.5vw);
                        }

                        p {
                          font-size: min(1.2rem, 4.5vw);
                        }
                      }
                    }
                  }
                }
              }
            }

            // second section
            &:last-of-type {
              div {
                padding: 0;

                h4 {
                  display: table;
                  font-size: min(1.5rem, 5.5vw);
                  padding: min(1.25rem, 1.57vw) max(1.8rem, 7vw);

                  margin-bottom: min(2rem, 8vw);

                  &:after {
                    margin-top: 4px;
                    height: min(0.388rem, 0.6vw);
                  }
                }

                > a {
                  font-size: 10px;
                }
              }
            }
          }
        }
      }

      footer p {
        padding: 1.5rem 5rem;
      }
    }
  }
`;
