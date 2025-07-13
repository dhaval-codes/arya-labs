import styled from "styled-components";

export const PageWrpr = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.backgroundPrimary};
  gap: 2rem;
`;
