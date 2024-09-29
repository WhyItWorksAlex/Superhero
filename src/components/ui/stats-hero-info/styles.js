import styled, { css }  from "styled-components";

export const StyledStatsHeroInfo = styled.ul`
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  list-style: none;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    padding-left: 5px;
    padding-right: 5px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {

  ${(props) =>
  props.$big
    ? css`
      padding-bottom: 15px;
    `
    : null 
    }
  }
`

export const Li = styled.li`
  margin: 0;
  padding: 0;
  font-weight: 700;
  margin-bottom: 7px;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    font-size: 12px;
    line-height: 16px;
  }

  ${(props) =>
  props.$visible
    ? css`
      &::before {
      flex-grow: 1;
      order: 2;
      margin-right: 16px;
      margin-left: 16px;
      border-bottom: 2px dotted rgba(89, 89, 89, 0.5);
      content: "";
      }     
    `
    : css`
      &::before {
        display: none;
      }
    `
  };  
`

export const Span = styled.span`
  font-weight: 400;
  font-style: italic;
  order: 3;
`