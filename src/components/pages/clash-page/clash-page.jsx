import { useState, useEffect, useMemo } from "react";
import HeroCard from "/src/components/ui/hero-card/hero-card";
import MainButtons from "/src/components/blocks/main-buttons/main-buttons";
import WinnerModal from "/src/components/ui/winner-modal/winner-modal";
import Waiting from "/src/components//blocks/waiting/waiting";
import { getRandomInteger, addZero } from "/src/utils";
import { QTYHEROES } from "/src/const";
import useMainStore from "../../../store/main-hero-store";
import useFightRecordStore from "../../../store/history-store";
import { HeroCardWrapper, StyledFightButton } from "./styles";
import toast from 'react-hot-toast';

// Function calculating total hero stat

function calcHeroTotalStat (stats) {
  let result = 0;
  stats.forEach((stat) => {
    result += stat.content * stat.coefficient
  })
  return result;
}

function ClashPage () {

  // State with information about heroes from Zustand

  const {
          hero1, 
          hero2, 
          setHero1, 
          setHero2, 
          error, 
          loadingHero1, 
          loadingHero2
        } = useMainStore(({
          hero1, 
          hero2, 
          setHero1, 
          setHero2, 
          error, 
          loadingHero1, 
          loadingHero2
        }) => ({
          hero1, 
          hero2, 
          setHero1, 
          setHero2, 
          error, 
          loadingHero1, 
          loadingHero2
        }))

  // State with information about fight history

  const {historyFightsList, setHistoryFightsList} = useFightRecordStore(({historyFightsList, setHistoryFightsList}) => ({historyFightsList, setHistoryFightsList}))

  // State information about active WinnerModal

  const [isActiveWinnerModal, setIsActiveWinnerModal] = useState(false);

  // State information about first loading

  const [firstLoading, setFirstLoading] = useState(true);

  // State timer when hold Fight btn

  const [timer, setTimer] = useState(null);
  
  // Function init Heroes
  
  const initHeroes = async () => {
    const firstId = getRandomInteger(1, QTYHEROES);
    const secondId = getRandomInteger(1, QTYHEROES, firstId);
    try {
      await setHero1(firstId);
      await setHero2(secondId);
      toast.success('Heroes loaded!')
    }
    catch (err) {
      toast.error(err)
    }
    finally {
      setFirstLoading(false);
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

  // Function choose the winner 

  function chooseWinner () {
    const now = new Date();
    const curDate = `${addZero(now.getDate())}.${addZero(now.getMonth() + 1)}.${now.getFullYear()} ${addZero(now.getHours())}:${addZero(now.getMinutes())}`;

    const historyResult = {
      number: historyFightsList.length + 1,
      firstHero: hero1,
      secondHero: hero2,
      date: curDate,
    }

    let hero1Total = parseInt(calcHeroTotalStat(hero1.stats));
    let hero2Total = parseInt(calcHeroTotalStat(hero2.stats));
    if (hero1Total > hero2Total) {
      historyResult.winner = 'firstHero';
    } else if (hero1Total < hero2Total) {
      historyResult.winner = 'secondHero';
    } else {
      historyResult.winner = 'draw';
    }
    setHistoryFightsList(historyResult);
    return historyResult
  }

  // Function reset timer when unpress fight button before time

  const mouseUpFightBtn = useMemo(() => () => 
    {
      clearInterval(timer)
    }
  )

  const firstLoadingContent = firstLoading ? <Waiting $isFunny={true}/> : null
  const errorContent = error ? <HeroCardWrapper>
                                <HeroCard hero={hero1} newLoading={true}/>
                                <StyledFightButton onClick={initHeroes}>
                                  Try again
                                </StyledFightButton>
                                <HeroCard hero={hero2} newLoading={true}/>
                              </HeroCardWrapper>
                              : null
  const modal = isActiveWinnerModal ? <WinnerModal setIsActiveWinnerModal={setIsActiveWinnerModal} lastFight={historyFightsList[historyFightsList.length-1]} /> : null


  return (
    <>
      {(Boolean(hero1?.name) && Boolean(hero2?.name)) ? (
        <>
          <MainButtons idArray={[+hero1.id, +hero2.id]} />
          <HeroCardWrapper>
            <HeroCard hero={hero1} newLoading={loadingHero1}/>
            <StyledFightButton 
              onMouseDown={handleFightBtn} 
              onMouseUp={mouseUpFightBtn}>
              Hold to Fight
              <span className="span_1"></span>
              <span className="span_2"></span>
              <span className="span_3"></span>
              <span className="span_4"></span>
            </StyledFightButton>
            <HeroCard hero={hero2} newLoading={loadingHero2}/>
          </HeroCardWrapper>
          {modal}
        </>
        ) : (
          <>
            {errorContent}
            {firstLoadingContent}
          </>
        )
      }
    </>
  );
}

export default ClashPage;