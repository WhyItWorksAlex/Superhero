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

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    padding-left: ${(props) => props.theme.pagePaddingTablet};
    padding-right: ${(props) => props.theme.pagePaddingTablet};
    width: 100%;
    flex-wrap: wrap;
    row-gap: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    padding-left: ${(props) => props.theme.pagePaddingMobile};
    padding-right: ${(props) => props.theme.pagePaddingMobile};
  }
`;