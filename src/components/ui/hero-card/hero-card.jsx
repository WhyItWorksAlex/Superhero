import React, { useState } from "react";
import { Wrapper, StyledImageWrapper, StyledImage } from "./styles";
import Properties from "/src/components/ui/properties/properties";
import HeroInfo from "/src/components/ui/hero-info/hero-info";
import { checkImage } from "../../../utils";


function HeroCard( {hero} ) {

  const [hasImage, setHasImage] = useState(true);

  let isGood = (hero.alignment === "good" || hero.alignment === "neutral")

  return (
    <Wrapper $isGood={isGood}>
      <StyledImageWrapper>
        <StyledImage src={checkImage(hasImage, hero)} onError={() => setHasImage(false)}/>
        <Properties stats={hero.stats}/>
      </StyledImageWrapper>
      <HeroInfo hero={hero} />
    </Wrapper>
  );
}


export default HeroCard;