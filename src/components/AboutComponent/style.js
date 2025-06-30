import styled from "styled-components";

export const AboutComponentWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const AboutHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentSecondary};
  margin: 0;
`;

export const AboutContent = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const AboutImageWrpr = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
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

export const AboutText = styled.p`
  width: 60%;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  text-align: justify;
`;

export const ButtonWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
