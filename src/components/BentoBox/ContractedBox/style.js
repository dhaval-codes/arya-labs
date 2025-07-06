import styled from "styled-components";

export const ContractedBoxWrpr = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : "none")};
  background-size: cover;
  position: absolute;
  z-index: 1;
`;
