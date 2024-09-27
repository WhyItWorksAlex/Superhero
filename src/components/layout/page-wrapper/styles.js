import styled from "styled-components";

export const StyledMain = styled.main`
  padding-left: ${(props) => props.theme.pagePadding};
  padding-right: ${(props) => props.theme.pagePadding};
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
  padding-bottom: ${(props) => props.theme.indent};
  box-sizing: border-box;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    padding-left: ${(props) => props.theme.pagePaddingTablet};
    padding-right: ${(props) => props.theme.pagePaddingTablet};
    width: 100%;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    padding-left: ${(props) => props.theme.pagePaddingMobile};
    padding-right: ${(props) => props.theme.pagePaddingMobile};
  }
`;