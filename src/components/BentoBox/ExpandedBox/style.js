import styled from "styled-components";

export const ExpandedBoxWrpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: ${({ bgimage }) => (bgimage ? `url(${bgimage})` : "none")};
  background-size: cover;
  position: absolute;
  z-index: 1;
`;

export const ExpandedTextWrpr = styled.div`
  height: 100%;
  width: 50%;
  position: absolute;
  right: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.textPrimary}60; /* add alpha for transparency */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 1rem;
`;

export const ExpandedTextHeader = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0;
`;

export const ExpandedTextDescription = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0;
  font-weight: 600;
`;
