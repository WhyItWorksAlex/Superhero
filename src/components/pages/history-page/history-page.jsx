import React from "react";

function HistoryPage( {historyFightList} ) {

  return (
    <div style={{color: 'white'}}>
      <ul>
        {historyFightList.map((fight, index) => (
          <li key={index}>
            <p>Боец 1 это {fight.firstHero.name} </p>
            <p>Боец 2 это {fight.secondHero.name} </p>
            <p>Победитель {fight.winner}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryPage;