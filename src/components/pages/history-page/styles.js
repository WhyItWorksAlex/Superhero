import styled from "styled-components";

export const StyledHistoryPage = styled.section`
  /* display: ${(props) => props.$isActive ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,.5); */
`;

export const StyledTable = styled.table`
	border-collapse: separate;
  border-spacing: 0;
  border: 1px solid white;

  & th {
    border: 1px solid white;
  }

  & td {
    border: 1px solid white;
  }
`