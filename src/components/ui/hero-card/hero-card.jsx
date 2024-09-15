import React, { useState } from "react";
import { Wrapper, StyledImageWrapper, StyledImage } from "./styles";
import Properties from "/src/components/ui/properties/properties";
import HeroInfo from "/src/components/ui/hero-info/hero-info";
import { checkImage } from "../../../utils";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HeroCard( props ) {
  const {hero, newLoading} = props

  const [hasImage, setHasImage] = useState(true);

  let isGood = (hero.alignment === "good" || hero.alignment === "neutral")

  const image = newLoading ? (
    <Skeleton style={{'display': 'block'}} borderRadius={'20px'} width={270} height={320} />
  ) : (
    <StyledImage src={checkImage(hasImage, hero)} onError={() => setHasImage(false)}/>
  );

  return (
    <SkeletonTheme baseColor='#ebebeb' highlightColor='#d6d6d6' duration={1}>
      <Wrapper $isGood={isGood}>
        <StyledImageWrapper>
          {image}
          <Properties {...props}/>
        </StyledImageWrapper>
        <HeroInfo {...props} />
      </Wrapper>
    </SkeletonTheme>
  );
}


export default HeroCard;