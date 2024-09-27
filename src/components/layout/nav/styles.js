import styled from "styled-components";

export const StyledNav = styled.nav`

`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  list-style: none;
  margin: 0;
  max-width: 600px;
  padding: 0;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    gap: 15px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 10;
    display: flex;
    gap: 0;
  }
`;

export const Li = styled.li`

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    width: 100%;
    background-color: ${(props) => props.theme.fontColorBlack};
    padding: 10px 0;
    border-top: 2px solid white;

    &:last-child {
      border-bottom: 2px solid white;
    }
  }
`;

