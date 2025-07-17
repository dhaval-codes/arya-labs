import styled from "styled-components";

export const MatrixEarthWrpr = styled.div`
  width: 100%;
  height: inherit;
  background: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.5;

  canvas {
    width: 100%;
    height: auto;
    display: block;
  }
`;
