import React, { useState, useEffect, useMemo } from "react";
import HeroCard from "/src/components/ui/hero-card/hero-card";
import MainButtons from "/src/components/blocks/main-buttons/main-buttons";
import { getRandomInteger } from "/src/utils";
import { HeroCardWrapper, StyledFightButton } from "./styles";
import WinnerModal from "/src/components/ui/winner-modal/winner-modal";
import { qtyHeroes } from "/src/const";
import Waiting from "/src/components//blocks/waiting/waiting";
import useHeroService from "../../../services/hero-service";


function ClashPage( {sethistoryFightsList, historyFightsList} ) {

  // Create useHeroService

  const {updateChar} = useHeroService()

  // State with information about heroes

  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  // State information about active WinnerModal

  const [isActiveWinnerModal, setIsActiveWinnerModal] = useState(false);

  // State timer when hold Fight btn

  const [timer, setTimer] = useState(null);
  
  // Function init Heroes
  
  const initHeroes = async () => {
    console.log('До')
    const firstId = getRandomInteger(1, qtyHeroes);
    const secondId = getRandomInteger(1, qtyHeroes, firstId);
    await updateChar(firstId, setHero1);
    await updateChar(secondId, setHero2);
    console.log('после')
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

    let hero1Total = parseInt(calcHeroTotalStat(hero1.stats));
    let hero2Total = parseInt(calcHeroTotalStat(hero2.stats));
    console.log(hero1Total, hero2Total)
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
          <MainButtons updateChar={updateChar} setHero1={setHero1} setHero2={setHero2} idArray={[+hero1.id, +hero2.id]} />
          <HeroCardWrapper>
            <HeroCard name='hero1' hero={hero1} />
            <StyledFightButton 
              onMouseDown={handleFightBtn} 
              onMouseUp={mouseUpFightBtn}>
              Hold to Fight
              <span className="span_1"></span>
              <span className="span_2"></span>
              <span className="span_3"></span>
              <span className="span_4"></span>
            </StyledFightButton>
            <HeroCard name='hero2' hero={hero2} />
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