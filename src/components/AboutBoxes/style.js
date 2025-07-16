import styled from "styled-components";

export const AboutBoxWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DataBox = styled.div`
  height: auto;
  width: calc(50% - 0.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ align }) =>
    align === "right" ? "flex-end" : "flex-start"};
  padding: 2rem;
`;

export const DataBoxHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentTertiary};
  margin: 0;
`;

export const DataBoxText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
`;

export const MiddleLine = styled.div`
  height: -webkit-fill-available;
  width: 0.5rem;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary},${theme.accentPrimary})`};
  border: 0;
`;
