import React from "react";
import { StyledHistoryPage, FigthTime, TournamentGrid, TournamentRoundFinal, TournamentRoundWinner, TournamentMatch, TournamentMatchWinner, TournamentMatchTeam, TournamentMatchTeamWinner } from "./styles";

function HistoryPage( {historyFightList} ) {

  return (
    <StyledHistoryPage>
      {historyFightList.length === 0 ? (
        <p>Боев нет</p>
      ) : (
      <>
        {historyFightList.map((fight, index) => (
          <React.Fragment key={index}>
            <FigthTime>{fight.date}</FigthTime>
            <TournamentGrid>
              <TournamentRoundFinal>
                <TournamentMatch>
                  <TournamentMatchTeam href="#">{fight.firstHero.name}</TournamentMatchTeam>
                  <TournamentMatchTeam href="#">{fight.secondHero.name}</TournamentMatchTeam>
                </TournamentMatch>
              </TournamentRoundFinal>
              <TournamentRoundWinner>
                <TournamentMatchWinner>
                  <TournamentMatchTeamWinner href="#">{fight.winner !== 'draw' ? fight[fight.winner].name : 'draw'}</TournamentMatchTeamWinner>
                </TournamentMatchWinner>
              </TournamentRoundWinner>
            </TournamentGrid>
          </React.Fragment>
          ))}
      </>)}
    </StyledHistoryPage>
  );
}

export default HistoryPage;