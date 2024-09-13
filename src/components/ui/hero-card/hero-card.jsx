import React, { useState, useEffect } from "react";
import { Wrapper, StyledImageWrapper, StyledImage } from "./styles";
import Properties from "/src/components/ui/properties/properties";
import HeroInfo from "/src/components/ui/hero-info/hero-info";
import { getStats } from "../../../utils";


function HeroCard( {hero, setStatsHero} ) {

  useEffect (() => {
    setHasImage(true);
    setStatsHero(getStats(hero))
  }, [hero])

  const [hasImage, setHasImage] = useState(true);

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