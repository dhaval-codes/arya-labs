import styled from "styled-components";

export const ContactComponentWrpr = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ContactHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${({ theme }) => theme.accentSecondary};
  margin: 0;
`;

export const ContactSubHeader = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin: 0;
`;
