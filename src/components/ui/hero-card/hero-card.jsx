import React, { useState, useEffect } from "react";
import { Wrapper, StyledImageWrapper, StyledImage, StyledButton } from "./styles";
import { getRandomInteger, debounce } from "../../../utils";
import Properties from "../properties/properties";
import HeroInfo from "../hero-info/hero-info";



function HeroCard( {getApiData, hero, name} ) {

  useEffect (() => {setHasImage(true)}, [hero])

  const [hasImage, setHasImage] = useState(true);

  const handle = () => {
    const randomId = getRandomInteger(1, 730)
    if (name === 'hero1') {
      getApiData(randomId, 1)
    } else {
      getApiData(randomId, 2)
    }
  }

  const handleDebounced = debounce(handle);

  let isGood = true;
  if (hero.biography.alignment !== "good" && hero.biography.alignment !== "neutral") {
    isGood = false
  }

  return (
    <Wrapper $isGood={isGood}>
      <StyledImageWrapper>
        <StyledImage src={hasImage ? hero.image.url : 'https://i.ibb.co/WcqzVwy/template-image.png'} onError={() => setHasImage(false)}/>
        <Properties hero={hero}/>
      </StyledImageWrapper>
      <HeroInfo hero={hero}/>
      <StyledButton type='button' onClick={handleDebounced}>Сменить</StyledButton>
    </Wrapper>
  );
}

export default HeroCard;