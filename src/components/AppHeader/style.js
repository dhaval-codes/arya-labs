import styled from "styled-components";

export const HeaderWrpr = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.accentPrimary}, ${theme.accentSecondary}, ${theme.accentTertiary})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const NavOptionsWrpr = styled.div`
  display: flex;
  gap: 2rem;
`;

export const NavOption = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentPrimary};
  }
`;
