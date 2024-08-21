import React, { useState, useEffect, useMemo } from "react";
import HeroCard from "../../ui/hero-card/hero-card";
import MainButtons from "../../blocks/main-buttons/main-buttons";
import { getRandomInteger } from "../../../utils";
import { HeroCardWrapper, StyledFightButton } from "./styles";
import WinnerModal from "../../ui/winner-modal/winner-modal";
import { qtyHeroes } from "../../../const";
import Waiting from "../../blocks/waiting/waiting";


function ClashPage( {sethistoryFightsList, historyFightsList, hero1, hero2, getApiData, getStats} ) {

  // State with information about heroes stats

  const [statsHero1, setStatsHero1] = useState([]);
  const [statsHero2, setStatsHero2] = useState([]);

  // State information about active WinnerModal

  const [isActiveWinnerModal, setIsActiveWinnerModal] = useState(false);

  // State timer when hold Fight btn

  const [timer, setTimer] = useState(null);
  
  // Function init Heroes
  
  const initHeroes = async () => {
    try {
      const hero1Data = await getApiData(getRandomInteger(1, qtyHeroes), 1);

      let hero2Data = await getApiData(getRandomInteger(1, qtyHeroes), 2);

      while (hero2Data.name === hero1Data.name) {
        hero2Data = await getApiData(getRandomInteger(1, qtyHeroes), 2);
      }

    } catch (error) {
      console.error("Ошибка загрузки героев:", error);
    }
  };

  // Init heroes on first start

  useEffect(() => {
    if (!hero1?.name && !hero2?.name) {
      initHeroes();   
    }
  }, []);

  // Function push on Fight btn

  const handleFightBtn = useMemo(() => () => 
    {
      const newTimer = setTimeout(() => {
        document.body.style.overflow = 'hidden';
        setIsActiveWinnerModal(true);
        chooseWinner();
      }, 1400);
      setTimer(newTimer)
    }
  )

  // Function chooce the winner 

  function addZero (num) {
    if (num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

  function chooseWinner () {
    const now = new Date();
    const curDate = `${addZero(now.getDay())}.${addZero(now.getMonth())}.${now.getFullYear()} ${addZero(now.getHours())}:${addZero(now.getMinutes())}`;

    const historyResult = {
      number: historyFightsList.length + 1,
      firstHero: hero1,
      secondHero: hero2,
      date: curDate,
    }

    let hero1Total = parseInt(calcHeroTotalStat(statsHero1));
    let hero2Total = parseInt(calcHeroTotalStat(statsHero2));
    if (hero1Total > hero2Total) {
      historyResult.winner = 'firstHero';
    } else if (hero1Total < hero2Total) {
      historyResult.winner = 'secondHero';
    } else {
      historyResult.winner = 'draw';
    }
    sethistoryFightsList([...historyFightsList, historyResult]);
    return historyResult
  }

  // Function calculating total hero stat

  function calcHeroTotalStat (stats) {
    let result = 0;
    stats.forEach((stat) => {
      result += stat.content * stat.coefficient
    })
    return result;
  }

  // Function reset timer when unpress fight button before time

  const mouseUpFightBtn = useMemo(() => () => 
    {
      clearInterval(timer)
    }
  )

  return (
    <>
      {(Boolean(hero1?.name) && Boolean(hero2?.name)) ? (
        <>
          <MainButtons getApiData={getApiData}/>
          <HeroCardWrapper>
            <HeroCard name='hero1' hero={hero1} setStatsHero={setStatsHero1} getStats={getStats}/>
            <StyledFightButton 
              onMouseDown={handleFightBtn} 
              onMouseUp={mouseUpFightBtn}>
              Hold to Fight
              <span className="span_1"></span>
              <span className="span_2"></span>
              <span className="span_3"></span>
              <span className="span_4"></span>
            </StyledFightButton>
            <HeroCard name='hero2' hero={hero2} setStatsHero={setStatsHero2} getStats={getStats}/>
          </HeroCardWrapper>
          <WinnerModal isActiveWinnerModal={isActiveWinnerModal} setIsActiveWinnerModal={setIsActiveWinnerModal} lastFight={historyFightsList[historyFightsList.length-1]} />
        </>
      ) : (
        <Waiting $isFunny={true}/>
      )}
    </>
  );
}

export default ClashPage;