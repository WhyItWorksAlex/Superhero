import React, { useState } from "react";
import { StyledHistoryPage, P, StyledLink, ButtonClear, Ul, Li, FigthInfo, TournamentGrid, TournamentRoundFinal, TournamentRoundWinner, TournamentMatch, TournamentMatchWinner, TournamentMatchTeam, TournamentMatchTeamWinner, Divider } from "./styles";
import { APPROUTE } from "/src/const";
import HeroBigCardModal from "/src/components/ui/hero-big-card-modal/hero-big-card-modal";
import useFightRecordStore from "../../../store/history-store";

function HistoryPage() {

  // State with information about fight history

  const {historyFightsList, resetHistoryFightsList} = useFightRecordStore(({historyFightsList, resetHistoryFightsList}) => ({historyFightsList, resetHistoryFightsList}))

  // State information about current Big Card hero

  const [isActiveBigCardHeroModal, setIsActiveBigCardHeroModal] = useState(false);

  const [curHero, setCurHero] = useState({});

  // Function click on hero button

  function handleHero (fight, heroType) {
    switch (heroType) {
      case 'first': 
        setCurHero(fight.firstHero);
        break;
      case 'second':
        setCurHero(fight.secondHero);
        break;
      case 'winner':
        if (fight.winner !== 'draw') {
          setCurHero(fight[fight.winner]);
          break;
        } else {
          setCurHero(fight.firstHero);
        }
    }
    document.body.style.overflow = 'hidden';
    setIsActiveBigCardHeroModal(true);
  }

  // Function click on clear button

  function handleClear () {
    sessionStorage.removeItem('storageHistoryFightList');
    resetHistoryFightsList();
  }

  const reverseHistoryFightList = [...historyFightsList].reverse()

  const modal = isActiveBigCardHeroModal ? <HeroBigCardModal setIsActiveBigCardHeroModal={setIsActiveBigCardHeroModal} hero={curHero} /> : null;

  return (
    <StyledHistoryPage>
      {historyFightsList.length === 0 ? (
        <>
          <P>There is no fights record.<br/>
            <StyledLink to={APPROUTE.MAIN.to}>Go to fight!</StyledLink>
          </P>
        </>
      ) : (
      <Ul>
        <ButtonClear onClick={handleClear}>Clear history</ButtonClear>
        {reverseHistoryFightList.map((fight, index) => (
          <Li key={index}>
            <FigthInfo>Fight №{fight.number}. {fight.date}</FigthInfo>
            <TournamentGrid>
              <TournamentRoundFinal>
                <TournamentMatch>
                  <TournamentMatchTeam
                    onClick={() => {
                      handleHero(fight, 'first');
                    }}>
                    {fight.firstHero.name}
                  </TournamentMatchTeam>
                  <TournamentMatchTeam
                    onClick={() => {
                      handleHero(fight, 'second');
                    }}>
                    {fight.secondHero.name}
                  </TournamentMatchTeam>
                </TournamentMatch>
              </TournamentRoundFinal>
              <TournamentRoundWinner>
                <TournamentMatchWinner>
                  <TournamentMatchTeamWinner
                    onClick={() => {
                      handleHero(fight, 'winner');
                    }}>
                    {fight.winner !== 'draw' ? fight[fight.winner].name : 'draw'}
                  </TournamentMatchTeamWinner>
                </TournamentMatchWinner>
              </TournamentRoundWinner>
            </TournamentGrid>
            <Divider />
          </Li>
          ))}
      </Ul>)}
      {modal}
    </StyledHistoryPage>
  );
}

export default HistoryPage;