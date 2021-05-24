import styled from 'styled-components';
import { backgroundImages, opacify } from 'polished';

export const Container = styled.div`
  display: flex;

  & + div {
    margin-top: min(2.375rem, 3vw);
  }

  > div {
    &:first-of-type {
      position: relative;

      max-width: min(9.875rem, 12.7vw) !important;
      min-width: min(5.5rem, 7.5vw);
      width: 100%;

      cursor: pointer;
      transition: 0.5s;

      &:after {
        content: '';

        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;

        background: ${opacify('0.1', 'rgba(254, 49, 137, 0.4)')};
        ${backgroundImages('url("/assets/play-circle-outline.svg")')}
        background-repeat: no-repeat;
        background-position: center;
        background-size: min(4rem, 5.2vw);

        opacity: 0;
        transition: opacity 0.5s ease-out;
        -o-transition: opacity 0.5s ease;
        -ms-transition: opacity 0.5s ease;
        -moz-transition: opacity 0.5s ease;
        -webkit-transition: opacity 0.5s ease;
      }

      &:hover {
        -webkit-box-shadow: 0px 0px 25px -5px var(--pink_FE3);
        box-shadow: 0px 0px 25px -5px var(--pink_FE3);

        &:after {
          opacity: 1;
        }
      }
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
