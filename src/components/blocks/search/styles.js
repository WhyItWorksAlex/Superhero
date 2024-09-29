import styled, {css} from "styled-components";
import Button from "/src/components/ui/button/button"

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: space-between;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    flex-wrap: wrap;
    padding: 0;
    width: 90%;
    justify-content: center;
    margin-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    width: 100%;
    gap: 2px;
  }
`;

export const StyledPaginationBtn = styled(Button)`
  border: none;
  background-color: inherit;
  color: white;
  font-size: 23px;
  line-height: 34px;
  cursor: pointer;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: 0.2s ease-in-out all;
  width: 36px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    width: 45px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    width: 40px;
  }

  &:hover {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
    color: ${(props) => props.theme.btnHoverTextColor};
    font-size: 28px;
  }

  &:active {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
    color: ${(props) => props.theme.btnHoverTextColor};
    opacity: 0.6;
    font-size: 28px;
  }

  ${(props) =>
  props.$isActive
    ? css`
      text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
      color: ${(props) => props.theme.btnHoverTextColor};
      font-size: 28px;
    `
    : null
  }; 
`;

export const Content = styled.div`
  width: 100%;
  position: relative;
`;


export const UlHeroes = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
  list-style: none;
  margin: 0;
  width: 100%;
  padding: 0 60px;
  box-sizing: border-box;
  margin-bottom: 20px;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: 30px;
  }

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    padding: 0 30px;
    margin-bottom: 0;
  }
`;

export const Li = styled.li`
  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    line-height: 0;
  }
`


export const HeroBtn = styled(Button)`
  border: none;
  background-color: inherit;
  color: white;
  font-size: 16px;
  cursor: pointer;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  transition: 0.2s ease-in-out all;

  @media (max-width: ${(props) => props.theme.maxTabletWidth}) {
    font-size: 14px;
    padding-left: 4px;
    padding-right: 4px;
  }
  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    font-size: 12px;
    height: 35px;
  }

  &:hover {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
  }

  &:active {
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
    opacity: 0.6;
  }

  ${(props) =>
  props.$isActive
    ? css`
      text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
      pointer-events: none;
    `
    : null
  };
`;

export const NextPageBtn = styled(Button)`
  position: absolute;
  border: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
  font-family: "Albert Sans", sans-serif;
  top: 0;
  right: 0;
  height: calc(100% - 20px);
  width: 60px;

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    height: 105px;
    width: 30px;
  }


  &::before {
    position: absolute;
    content: "";
    width: 32px;
    height: 10px;
    background-image: url('/icon-arrow-long.svg');
    background-repeat: no-repeat;
    background-position: center;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);

    @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
      width: 20px;
      background-position: right;
    }
  }

  &:hover {
    background-color: rgba(255,255,255, 0.2);
  }

  &:active {
    background-color: rgba(255,255,255, 0.1);
  }
`;

export const PrevPageBtn = styled(Button)`
  position: absolute;
  border: none;
  background-color: inherit;
  color: white;
  cursor: pointer;
  font-family: "Albert Sans", sans-serif;
  top: 0;
  left: 0;
  height: calc(100% - 20px);
  width: 60px;

  @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
    height: 105px;
    width: 30px;
    padding: 0;
  }

  &::before {
    position: absolute;
    content: "";
    width: 32px;
    height: 10px;
    background-image: url('/icon-arrow-long.svg');
    background-repeat: no-repeat;
    background-position: center;
    top: 50%;
    transform: translateY(-50%) translateX(-50%) rotate(180deg);

    @media (max-width: ${(props) => props.theme.maxMobileWidth}) {
      width: 20px;
      background-position: right;
    }
  }

  &:hover {
    background-color: rgba(255,255,255, 0.2);
  }

  &:active {
    background-color: rgba(255,255,255, 0.1);
  }
`;
