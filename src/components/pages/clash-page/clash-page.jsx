import React, { useState, useEffect, useMemo } from "react";
import HeroCard from "../../ui/hero-card/hero-card";
import MainButtons from "../../blocks/main-buttons/main-buttons";
import { getRandomInteger } from "../../../utils";
import { HeroCardWrapper, StyledFightButton } from "./styles";
import WinnerModal from "../../blocks/winner-modal/winner-modal";

const qty = 3


function ClashPage( {setHistoryFightList, historyFightList, setHero1, setHero2, hero1, hero2} ) {

  // State with information about heroes stats

  const [statsHero1, setStatsHero1] = useState([]);
  const [statsHero2, setStatsHero2] = useState([]);

  // State information about active WinnerModal

  const [isActiveWinnerModal, setIsActiveWinnerModal] = useState(false);

  // State timer when hold Fight btn

  const [timer, setTimer] = useState(null);

  // // Function get hero data (on async/await and try block)

  // const getApiData = async (id, num = 0) => {
  //   const response = await fetch(
  //     `https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`
  //   )
  //   .then((response) => {
  //     if (!response.ok) {
  //       throw new Error(`Could not fetch ${url}, status: ${response.status}`);
  //     }
  //     return response.json();
  //   })
  //   .catch(() => {
  //     throw new Error(`Could not fetch, status: ${response.status}`);
  //   });

  //   if (num === 0) {
  //     return response
  //   } else if(num === 1) {
  //     if (response.name === hero2.name) {
  //       getApiData(getRandomInteger(1, qty), 1)
  //     } else {
  //       setHero1(response);
  //     }
  //   } else {
  //     if (response.name === hero1.name) {
  //       getApiData(getRandomInteger(1, qty), 2)
  //     } else {
  //       setHero2(response);
  //     }
  //   }
  // };

  // Function get hero data (on Promises)

  const getApiData = (id, num = 0) => {
    return fetch(`https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (num === 0) {
          return response;
        } else if (num === 1) {
          if (response.name === hero2.name || response.name === hero1.name) {
            return getApiData(getRandomInteger(1, qty), 1);
          } else {
            setHero1(response);
            return response;
          }
        } else {
          if (response.name === hero2.name || response.name === hero1.name) {
            return getApiData(getRandomInteger(1, qty), 2);
          } else {
            setHero2(response);
            return response;
          }
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении данных:", error);
        throw error;
      });
  };
  
  // init Heroes (on Promises)
  
  const initHeroes = async () => {
    try {
      const hero1Data = await getApiData(getRandomInteger(1, qty), 1);

      let hero2Data = await getApiData(getRandomInteger(1, qty), 2);

      while (hero2Data.name === hero1Data.name) {
        hero2Data = await getApiData(getRandomInteger(1, qty), 2);
      }

    } catch (error) {
      console.error("Ошибка загрузки героев:", error);
    }
  };

  // Init heros on first start

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

  function chooseWinner () {
    const historyResult = {
      firstHero: hero1,
      secondHero: hero2,
    }
    let hero1Total = parseInt(calcHeroTotalStat(statsHero1));
    let hero2Total = parseInt(calcHeroTotalStat(statsHero2));
    if (hero1Total > hero2Total) {
      historyResult.winner = hero1.name;
    } else if (hero1Total < hero2Total) {
      historyResult.winner = hero2.name;
    } else {
      historyResult.winner = "-";
    }
    setHistoryFightList([...historyFightList, historyResult]);
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
            <HeroCard name='hero1' hero={hero1} setStatsHero={setStatsHero1}/>
            <StyledFightButton 
              onMouseDown={handleFightBtn} 
              onMouseUp={mouseUpFightBtn}>
              Hold to Fight
              <span className="span_1"></span>
              <span className="span_2"></span>
              <span className="span_3"></span>
              <span className="span_4"></span>
            </StyledFightButton>
            <HeroCard name='hero2' hero={hero2} setStatsHero={setStatsHero2}/>
          </HeroCardWrapper>
          <WinnerModal isActiveWinnerModal={isActiveWinnerModal} setIsActiveWinnerModal={setIsActiveWinnerModal} lastFight={historyFightList[historyFightList.length-1]} />
        </>
      ) : (
        <>
          <p style={{color: 'red'}}>ТУТ ПОКА ПУСТО</p>
        </>
      )}
    </>
  );
}

export default ClashPage;