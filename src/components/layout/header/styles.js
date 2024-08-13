import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-top: ${(props) => props.theme.indent};
  padding-bottom: ${(props) => props.theme.indent};
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  box-sizing: border-box;
`;