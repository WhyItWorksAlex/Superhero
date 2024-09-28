import styled  from "styled-components";

export const SkeletonWrapper = styled.div`
  display: flex;
  gap: 10px;   
  align-items: center; 

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {

  }
`

export const StyledMainHeroInfo = styled.ul`
  margin: 0;
  margin-top: 10px;
  padding-left: 10px;
  list-style: none;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    margin-top: 5px;
  }
`

export const Li = styled.li`
  margin: 0;
  padding: 0;
  margin-bottom: 12px;  
  font-size: 20px;
  line-height: 25px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    margin-bottom: 8px;  
    font-size: 18px;
    line-height: 22px;
  } 
`
export const Title = styled.p`
  display: block; 
  font-weight: 700;
  margin: 0;
  padding: 0;
`

export const Span = styled.span`
  font-weight: 400;
  font-style: italic;
`