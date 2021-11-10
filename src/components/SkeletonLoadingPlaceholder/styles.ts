import styled, { keyframes } from 'styled-components';

// Create the keyframes
const shimmer = keyframes`
  from {
    transform: translateX(-100%) rotate(45deg);
  }

  to {
    transform: translateX(100%);
  }
`;

const shimmerText = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
`;

export const Container = styled.div`
  &.placeholder {
    max-width: 300px;

    .faux-image-wrapper {
      position: relative;

      margin-bottom: 10px;
      padding-bottom: 100%; /* Or height: 200px; */

      .faux-image {
        position: absolute;

        width: 100%;
        height: 100%;
        border-radius: 4px;
        background: #dddddd;
      }
    }

    .faux-text {
      height: 20px;
      margin-bottom: 5px;
      border-radius: 4px;
      background: #dddddd;

      &.shimmer {
        &::after {
          margin-left: 50%;
        }
        &::before,
        &::after {
          width: 50%;
          animation: ${shimmerText} 1s linear infinite;
        }
      }

      &.short {
        width: 75%;
      }
    }
  }

  .shimmer {
    position: relative;
    overflow: hidden;

    &::after {
      margin-left: 80%;
    }
    &::before,
    &::after {
      content: '';

      position: absolute;
      top: -50%;
      z-index: 1;

      width: 100%;
      height: 200%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: ${shimmer} 2s linear infinite;
    }
  }
`;
