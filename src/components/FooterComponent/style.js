import styled from "styled-components";

export const FooterWrpr = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundTertiary};
  padding: 2.5rem 10rem;
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

export const NavOption = styled.span`
  font-size: 0.8125rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.accentPrimary};
  }
`;
