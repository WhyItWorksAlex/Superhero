import React, { useState, useEffect } from "react";
import { Wrapper, StyledImageWrapper, StyledImage } from "./styles";
import Properties from "../properties/properties";
import HeroInfo from "../hero-info/hero-info";
import { getRandomInteger } from "../../../utils";




function HeroCard( {hero, setStatsHero} ) {

  useEffect (() => {
    setHasImage(true);
    setStatsHero(getStats(hero))
  }, [hero])

  const [hasImage, setHasImage] = useState(true);

  // Function create array with hero stats

  const getStats = (hero) => {
    return [
      {
        title: "Combat",
        content: validateStat(hero.powerstats.combat),
        image: "https://i.ibb.co/6nskgZ6/1.png",
        coefficient: 0.25,
      },
      {
        title: "Power",
        content: validateStat(hero.powerstats.power),
        image: "https://i.ibb.co/Jtp2HW5/2.png",
        coefficient: 0.20,
      },
      {
        title: "Durability",
        content: validateStat(hero.powerstats.durability),
        image: "https://i.ibb.co/LdH2Sby/3.png",
        coefficient: 0.15,
      },
      {
        title: "Strength",
        content: validateStat(hero.powerstats.strength),
        image: "https://i.ibb.co/PY9pSDw/4.png",
        coefficient: 0.15,
      },
      {
        title: "Intelligence",
        content: validateStat(hero.powerstats.intelligence),
        image: "https://i.ibb.co/xHCLyJx/5.png",
        coefficient: 0.15,
      },
      {
        title: "Speed",
        content: validateStat(hero.powerstats.speed),
        image: "https://i.ibb.co/DPF2WNZ/6.png",
        coefficient: 0.10,
      },
    ];
  }

  // Function validation hero stats

  function validateStat (value) {
    if (value === 'null') {
      return getRandomInteger(5, 100);
    } else if (value > 100) {
      console.log("больше 100")
      return 100;
    } else if (value === 0) {
      return 1;
    }else {
      return value
    }
  }

  const stats = getStats(hero);

  let isGood = true;
  if (hero.biography.alignment !== "good" && hero.biography.alignment !== "neutral") {
    isGood = false
  }

  return (
    <Wrapper $isGood={isGood}>
      <StyledImageWrapper>
        <StyledImage src={hasImage ? hero.image.url : 'https://i.ibb.co/WcqzVwy/template-image.png'} onError={() => setHasImage(false)}/>
        <Properties stats={stats}/>
      </StyledImageWrapper>
      <HeroInfo hero={hero} stats={stats}/>
    </Wrapper>
  );
}


export default HeroCard;