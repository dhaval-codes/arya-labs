import styled from "styled-components";

export const AboutPageCont = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;

export const AboutPageHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentSecondary};
  margin: 0;
`;

export const AboutSubHeader = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;

  & span {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
  }
`;

export const AboutSection = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const DataHeading = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentPrimary};
  margin: 0;
`;

export const DataText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
`;

export const WorldMapSectionWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WorldMapTextWrpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;

export const WorldMapWrpr = styled.div`
  position: relative;
`;

export const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem;
  gap: 3rem;
  z-index: 2; /* Make sure it's above the MatrixDotMap */
  text-align: center;
`;

export const IndustryText = styled.span`
  font-size: 2rem;
  font-weight: 600;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  z-index: 10;
`;
