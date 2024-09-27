import styled from "styled-components";

export const StyledMainButtons = styled.section`
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 97px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    margin-top: 20px;
    gap: 20px;
    padding: 0;

    grid-row: 1/3;
    flex-direction: column;
    justify-content: space-around;
  }
`;

