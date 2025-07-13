import styled, { keyframes, css } from "styled-components";

const smoothGridTransition = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.02);
    opacity: 0.9;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 40rem;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Grid = styled.div`
  display: grid;
  gap: 1rem;
  height: 100%;

  /* Desktop: 3x3 grid */
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  @media (max-width: 900px) {
    /* Tablet: 2x4 grid */
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    /* Mobile: 1x6 grid */
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const Box = styled.div`
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;

  /* Smooth transitions for all properties */
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  /* Animation when grid position changes - FIXED with css helper */
  ${({ istransitioning }) =>
    istransitioning &&
    css`
      animation: ${smoothGridTransition} 0.6s ease-out;
    `}

  ${({ expanded }) =>
    expanded
      ? css`
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
          z-index: 10;
          transform: scale(1.01);
        `
      : css`
          opacity: 0.9;
          z-index: 1;
          transform: scale(1);
        `}

  /* Grid positioning with transition */
  grid-area: ${({ gridarea }) => gridarea.desktop};

  @media (max-width: 900px) {
    grid-area: ${({ gridarea }) => gridarea.tablet};
  }

  @media (max-width: 600px) {
    grid-area: ${({ gridarea }) => gridarea.mobile};
  }
`;
