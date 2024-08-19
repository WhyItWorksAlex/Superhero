import styled from "styled-components";

export const StyledHistoryPage = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

export const FigthTime = styled.div`
  
`

export const TournamentGrid = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

export const TournamentMatchTeam = styled.div`
  font-size: 14px;
  font-weight: bold;
  transition: color .3s ease;
  color: #ccc;
  text-decoration: none;
  
  &:focus,
  &:hover {
    color: #fff;
  }
  
  box-sizing: border-box;
  background: rgba(#000, .2);
  display: block;
  position: relative;
  width: auto;
  height: 32px;
  line-height: 32px;
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

export const TournamentMatchTeamWinner = styled.a`
  display: block;
  font-size: 14px;
  font-weight: bold;
  transition: color .3s ease;
  color: #ccc;
  text-decoration: none;
  
  &:focus,
  &:hover {
    color: #fff;
  }
  
  box-sizing: border-box;
  background: rgba(#000, .2);
  display: block;
  position: relative;
  width: auto;
  height: 32px;
  line-height: 32px;
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

