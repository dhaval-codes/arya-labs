import styled from "styled-components";

export const ExpandedTextWrpr = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) =>
    theme.textPrimary}60; /* add alpha for transparency */
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(12px);
  border-radius: 0rem 0rem 1rem 1rem;
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const ContractedBoxWrpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: ${({ bgimage }) => (bgimage ? `url(${bgimage})` : "none")};
  background-size: 105%;
  background-position: center;
  position: absolute;
  z-index: 1;
  transition: background-size 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-size: 100%;
  }

  &:hover ${ExpandedTextWrpr} {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }
`;

export const ExpandedTextHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.backgroundPrimary};
  margin: 0;
`;
