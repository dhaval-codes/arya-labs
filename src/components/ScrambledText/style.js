import styled from "styled-components";

export const ScrambledTextWrpr = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.accentSecondary};
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
`;
