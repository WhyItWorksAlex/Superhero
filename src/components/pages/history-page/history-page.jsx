import React, { useState } from "react";
import { StyledHistoryPage, P, StyledLink, Ul, Li, FigthInfo, TournamentGrid, TournamentRoundFinal, TournamentRoundWinner, TournamentMatch, TournamentMatchWinner, TournamentMatchTeam, TournamentMatchTeamWinner, Divider } from "./styles";
import { AppRoute } from "/src/const";
import HeroBigCardModal from "/src/components/ui/hero-big-card-modal/hero-big-card-modal";

function HistoryPage( {historyFightsList, getStats} ) {

  // State information about current Big Card hero

  const [isActiveBigCardHeroModal, setIsActiveBigCardHeroModal] = useState(false);

  const [curHero, setCurHero] = useState({});

  function handleBtn (fight, heroType) {
    switch (heroType) {
      case 'first': 
        setCurHero(fight.firstHero);
        break;
      case 'second':
        setCurHero(fight.secondHero);
        break;
      case 'winner':
        setCurHero(fight[fight.winner]);
        break;
    }
    document.body.style.overflow = 'hidden';
    setIsActiveBigCardHeroModal(true);
  }

  return (
    <StyledHistoryPage>
      {historyFightsList.length === 0 ? (
        <>
          <P>There is no fights record.<br/>
            <StyledLink to={AppRoute.MAIN}>Go to fight!</StyledLink>
          </P>
        </>
      ) : (
      <Ul>
        {historyFightsList.map((fight, index) => (
          <Li key={index}>
            <FigthInfo>Fight №{fight.number}. {fight.date}</FigthInfo>
            <TournamentGrid>
              <TournamentRoundFinal>
                <TournamentMatch>
                  <TournamentMatchTeam
                    onClick={() => {
                      handleBtn(fight, 'first');
                    }}>
                    {fight.firstHero.name}
                  </TournamentMatchTeam>
                  <TournamentMatchTeam
                    onClick={() => {
                      handleBtn(fight, 'second');
                    }}>
                    {fight.secondHero.name}
                  </TournamentMatchTeam>
                </TournamentMatch>
              </TournamentRoundFinal>
              <TournamentRoundWinner>
                <TournamentMatchWinner>
                  <TournamentMatchTeamWinner
                    onClick={() => {
                      handleBtn(fight, 'winner');
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
      {isActiveBigCardHeroModal === true ? (
        <HeroBigCardModal isActiveBigCardHeroModal={isActiveBigCardHeroModal} setIsActiveBigCardHeroModal={setIsActiveBigCardHeroModal} hero={curHero} getStats={getStats}/>
      ) : (
        <></>
      )}
    </StyledHistoryPage>
  );
}

export default HistoryPage;