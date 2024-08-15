import styled  from "styled-components";

export const StyledStatsHeroInfo = styled.ul`
  margin: 0;
  padding-left: 10px;
  padding-right: 10px;
  list-style: none;
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

  &::before {
  flex-grow: 1;
  order: 2;
  margin-right: 16px;
  margin-left: 16px;
  border-bottom: 2px dotted rgba(89, 89, 89, 0.5);
  content: "";
}
`

export const Span = styled.span`
  font-weight: 400;
  font-style: italic;
  order: 3;
`