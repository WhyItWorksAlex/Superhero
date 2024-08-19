import React from "react";
// import { StyledHistoryPage, StyledTable } from "./styles";

import { StyledHistoryPage, FigthTime, TournamentGrid, TournamentRoundFinal, TournamentRoundWinner, TournamentMatch, TournamentMatchWinner, TournamentMatchTeam, TournamentMatchTeamWinner } from "./styles";

function HistoryPage( {historyFightList} ) {

  return (
    <StyledHistoryPage>
      {/* <StyledTable>
        <thead>
          <tr>
            <th>Left hero</th>
            <th>Winner</th>
            <th>Right hero</th>
          </tr>
        </thead>
        <tbody>
          {historyFightList.length === 0 ? (
            <tr>
              <td colSpan="3">There is no fight record </td>
            </tr>
          ) : (
            <>
              {historyFightList.map((fight, index) => (
                <tr key={index}>
                  <td>{fight.firstHero.name} </td>
                  <td>{fight.winner}</td>
                  <td>{fight.secondHero.name} </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </StyledTable> */}

          {historyFightList.length === 0 ? (
            <p>Боев нет</p>
          ) : (
          <>
            {historyFightList.map((fight, index) => (
              <>
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
              </>
              ))}
          </>)}

      

    </StyledHistoryPage>
  );
}

export default HistoryPage;