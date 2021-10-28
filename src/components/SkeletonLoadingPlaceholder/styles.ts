import styled, { keyframes } from 'styled-components';

// Create the keyframes
const shimmer = keyframes`
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

      &.shimmer::before {
        animation: ${shimmer} 1.5s linear infinite;
      }

      &.short {
        width: 75%;
      }
    }
  }

  .shimmer {
    position: relative;
    overflow: hidden;

    &::before {
      content: '';

      position: absolute;
      z-index: 1;

      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      );
      animation: ${shimmer} 1s linear infinite;
    }
  }
`;
