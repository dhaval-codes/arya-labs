import styled from "styled-components";

export const HeroComponentWrpr = styled.div`
  width: 100%;
  min-height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

export const HeroTextWrpr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  z-index: 2;
  text-align: left;
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem; /* Slightly larger for more impact */
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const HeroAnimationWrpr = styled.div`
  width: auto;
  height: auto;
  position: absolute;
  right: 0;
  z-index: 1;
  opacity: 0.8;

  /* Hide or adjust on smaller screens */
  @media (max-width: 1024px) {
    opacity: 0.15;
    right: -300px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
