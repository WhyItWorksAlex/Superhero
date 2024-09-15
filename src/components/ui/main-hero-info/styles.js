import styled, { css }  from "styled-components";

export const StyledMainHeroInfo = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding-left: 10px;
  list-style: none;
`

export const Li = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;  
  font-weight: 700;
  font-size: 20px;
  line-height: 25px;

  ${(props) =>
  props.$visible
    ? css`
      display: block; 

    `
    : css`
      display: flex;
      gap: 10px;     
    `
  }; 
`

export const Span = styled.span`
  font-weight: 400;
  font-style: italic;
`