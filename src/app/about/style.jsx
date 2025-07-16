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

export const HeroComponent = styled.div`
  height: 30rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const HeroImageWrpr = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  border-radius: 1rem;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.accentSecondary};
  img {
    width: 100%;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.05);
    }
  }
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

export const AboutText = styled.p`
  width: 60%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
  span {
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary})`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    font-weight: 600;
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

export const AboutSectionChild = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainLine = styled.div`
  height: -webkit-fill-available;
  width: 0.5rem;
  background: ${({ theme }) =>
    `linear-gradient(to bottom, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary},${theme.accentPrimary})`};
  border: 0;
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
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
`;

export const WorldMapSectionWrpr = styled.div`
  height: auto;
`;
