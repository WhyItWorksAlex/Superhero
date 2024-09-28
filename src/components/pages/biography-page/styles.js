import styled from "styled-components";

export const StyledBiographyPage = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const P = styled.p`
  font-size: 23px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    font-size: 20px;
    text-align: center;
    padding: 0;
  }
`;
