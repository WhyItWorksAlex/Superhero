import React, { useState, useEffect } from "react";
import HeroCard from "../../ui/hero-card/hero-card";
import MainButtons from "../../blocks/main-buttons/main-buttons";
import { getRandomInteger } from "../../../utils";
import { HeroCardWrapper, StyledFightButton } from "./styles";
import WinnerModal from "../../blocks/winner-modal/winner-modal";


function ClashPage( ) {
  const [hero1, setHero1] = useState([]);
  const [hero2, setHero2] = useState([]);

  const [isActiveWinnerModal, setIsActiveWinnerModal] = useState(false);

  const getStats = (hero) => {
    return [
      {
        title: "Combat",
        content: (hero.powerstats.combat !== 'null' ? hero.powerstats.combat : 25),
        image: "https://i.ibb.co/nPq5j1n/image.png",
      },
      {
        title: "Durability",
        content: hero.powerstats.durability,
      },
      {
        title: "Intelligence",
        content: hero.powerstats.intelligence,
      },
      {
        title: "Power",
        content: hero.powerstats.power,
      },
      {
        title: "Speed",
        content: hero.powerstats.speed,
      },
      {
        title: "Strength",
        content: hero.powerstats.strength,
      },
    ];
  }


  const getApiData = async (id, heroNum) => {
    const response = await fetch(
      `https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/${id}`
    )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }
      return response.json();
    })
    .catch(() => {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    });

    // Обновим состояние
    if(heroNum === 1) {
      setHero1(response);
    } else {
      setHero2(response);
    }

  };

  useEffect(() => {
    getApiData(getRandomInteger(1, 730), 1)
    getApiData(getRandomInteger(1, 730), 2)
  }, []);

  console.log(hero1)

  const [timer, setTimer] = useState(null);

  const handleFightBtn = () => {
    const newTimer = setTimeout(() => {
      document.body.style.overflow = 'hidden';
      setIsActiveWinnerModal(true);
    }, 1400);
    setTimer(newTimer)
  }

  const mouseUpFightBtn = () => {
    clearInterval(timer)
  }

  return (
    <>
      {(Boolean(hero1.name) && Boolean(hero2.name)) ? (
        <>
          <MainButtons getApiData={getApiData}/>
          <HeroCardWrapper>
            <HeroCard name='hero1' hero={hero1} getStats={getStats}/>
            <StyledFightButton 
              onMouseDown={handleFightBtn} 
              onMouseUp={mouseUpFightBtn}>
              Hold to Fight
              <span className="span_1"></span>
              <span className="span_2"></span>
              <span className="span_3"></span>
              <span className="span_4"></span>
            </StyledFightButton>
            <HeroCard name='hero2' hero={hero2} getStats={getStats}/>
          </HeroCardWrapper>
          <WinnerModal isActiveWinnerModal={isActiveWinnerModal} setIsActiveWinnerModal={setIsActiveWinnerModal} />
        </>
      ) : (
        <>
          <p>ТУТ ПОКА ПУСТО</p>
        </>
      )}
    </>
  );
}

export default ClashPage;