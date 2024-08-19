import React from "react";
import { StyledHistoryPage, StyledTable } from "./styles";

function HistoryPage( {historyFightList} ) {

  return (
    <StyledHistoryPage style={{color: 'white'}}>
      <StyledTable>
        <thead>
          <tr>
            <th>Left corner hero</th>
            <th>Right corner hero</th>
            <th>Winner</th>
          </tr>
        </thead>
        <tbody>
          {historyFightList.map((fight, index) => (
            <tr key={index}>
              <td>{fight.firstHero.name} </td>
              <td>{fight.secondHero.name} </td>
              <td>{fight.winner}</td>
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </StyledHistoryPage>
  );
}

export default HistoryPage;