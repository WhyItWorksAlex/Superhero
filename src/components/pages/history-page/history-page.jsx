import React from "react";
import { StyledHistoryPage, Ul, Li, FigthInfo, TournamentGrid, TournamentRoundFinal, TournamentRoundWinner, TournamentMatch, TournamentMatchWinner, TournamentMatchTeam, TournamentMatchTeamWinner, Divider } from "./styles";

function HistoryPage( {historyFightList} ) {

  return (
    <StyledHistoryPage>
      {historyFightList.length === 0 ? (
        <>
          <FigthInfo>There is no fights record.</FigthInfo>
            <TournamentGrid>
              <TournamentRoundFinal>
                <TournamentMatch>
                  <TournamentMatchTeam>First Hero</TournamentMatchTeam>
                  <TournamentMatchTeam>Second Hero</TournamentMatchTeam>
                </TournamentMatch>
              </TournamentRoundFinal>
              <TournamentRoundWinner>
                <TournamentMatchWinner>
                  <TournamentMatchTeamWinner>Winner</TournamentMatchTeamWinner>
                </TournamentMatchWinner>
              </TournamentRoundWinner>
            </TournamentGrid>
            <Divider />
        </>
      ) : (
      <Ul>
        {historyFightList.map((fight, index) => (
          <Li key={index}>
            <FigthInfo>Fight №{fight.number}. {fight.date}</FigthInfo>
            <TournamentGrid>
              <TournamentRoundFinal>
                <TournamentMatch>
                  <TournamentMatchTeam>{fight.firstHero.name}</TournamentMatchTeam>
                  <TournamentMatchTeam>{fight.secondHero.name}</TournamentMatchTeam>
                </TournamentMatch>
              </TournamentRoundFinal>
              <TournamentRoundWinner>
                <TournamentMatchWinner>
                  <TournamentMatchTeamWinner>{fight.winner !== 'draw' ? fight[fight.winner].name : 'draw'}</TournamentMatchTeamWinner>
                </TournamentMatchWinner>
              </TournamentRoundWinner>
            </TournamentGrid>
            <Divider />
          </Li>
          ))}
      </Ul>)}
    </StyledHistoryPage>
  );
}

export default HistoryPage;