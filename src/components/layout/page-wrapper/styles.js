import styled from "styled-components";

export const StyledMain = styled.main`

  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: ${(props) => props.theme.indent};
  padding-bottom: ${(props) => props.theme.indent};
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  gap: 150px;
`;