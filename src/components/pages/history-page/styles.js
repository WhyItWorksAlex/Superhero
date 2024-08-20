import styled from "styled-components";
import Button from "../../ui/button/button";

export const StyledHistoryPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "Albert Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
`;

export const Li = styled.li`
  text-decoration: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FigthInfo = styled.p`
  margin: 0;
  align-self: center;
  text-decoration: underline;
`

export const TournamentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  &::before {

  }
`

export const TournamentRoundFinal = styled.div`
  position: relative;
  flex: 1 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const TournamentRoundWinner = styled.div`
  position: relative;
  flex: 1 0;
  display: flex;
  flex-direction: column;
  padding-right: 0;
`

export const TournamentMatch = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: center;
  min-height: 100px;

  &:first-child {
    margin: 0 !important;
  }

  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 2px;
    background: #fff;
    top: 25%;
    bottom: 25%;
  }
`
export const TournamentMatchWinner = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1 0;
  align-items: center;
  min-height: 100px;
`

export const TournamentMatchTeam = styled(Button)`
  font-size: 16px;
  color: ${(props) => props.theme.fontColorBlack};
  text-decoration: none;
  text-align: center;
  border: 2px outset;
  background-color: #E0BF1C;
  transition: 0.2s ease-in-out all;
  
  &:hover {
    background-color: #FEE56A;
  }

  &:active {
    border: 2px inset;
    background-color: #FEE56A;
  }
  
  box-sizing: border-box;

  display: block;
  position: relative;
  min-width: 200px;
  height: 32px;
  line-height: 28px;
  padding: 0 36px 0 36px;
  margin: auto;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 999px;
    height: 2px;
    margin-top: -1px;
    background: #fff;
  }

  &:after {
    left: 100%;
  }
`

export const TournamentMatchTeamWinner = styled(Button)`
  font-size: 16px;
  color: ${(props) => props.theme.fontColorBlack};
  text-decoration: none;
  text-align: center;
  border: 2px outset;
  background-color: #E0BF1C;
  transition: 0.2s ease-in-out all;
  
  &:hover {
    background-color: #FEE56A;
  }

  &:active {
    border: 2px inset;
    background-color: #FEE56A;
  }
  
  box-sizing: border-box;
  display: block;
  position: relative;
  width: auto;
  height: 32px;
  line-height: 28px;
  padding: 0 36px 0 36px;
  margin: auto;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    width: 999px;
    height: 2px;
    margin-top: -1px;
    background: #fff;
  }

  &:after {
    right: 100%;
  }
`

export const Divider = styled.hr`
  margin-top: 20px;
  height: 10px;
  border: 0;
  box-shadow: 0 10px 10px -10px #8c8b8b inset;
  width: 100%;
`
