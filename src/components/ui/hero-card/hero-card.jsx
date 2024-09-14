import React, { useState, useEffect } from "react";
import { Wrapper, StyledImageWrapper, StyledImage } from "./styles";
import Properties from "/src/components/ui/properties/properties";
import HeroInfo from "/src/components/ui/hero-info/hero-info";


function HeroCard( {hero} ) {

  useEffect (() => {
    setHasImage(true);
  }, [hero])

  const [hasImage, setHasImage] = useState(true);

  let isGood = true;
  if (hero.alignment !== "good" && hero.alignment !== "neutral") {
    isGood = false
  }

  return (
    <Wrapper $isGood={isGood}>
      <StyledImageWrapper>
        <StyledImage src={hasImage ? hero.image : 'https://i.ibb.co/WcqzVwy/template-image.png'} onError={() => setHasImage(false)}/>
        <Properties stats={hero.stats}/>
      </StyledImageWrapper>
      <HeroInfo hero={hero} stats={hero.stats}/>
    </Wrapper>
  );
}


export default HeroCard;