import React, { useState } from "react";
import { StyledWrapperCard, StyledWrapperLeftPart, StyledImageWrapper, StyledImage, Description } from "./styles";
import MainHeroInfo from "/src/components/ui/main-hero-info/main-hero-info";
import StatsHeroInfo from "/src/components/ui/stats-hero-info/stats-hero-info";
import { checkImage } from "../../../utils";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function HeroBigCard( {hero, newLoading} ) {

  // List of sections

  const information = [
    {
      title: "Name",
      content: hero.name
    },
    {
      title: "Full name",
      content: hero.fullName,
    },
    {
      title: "Place of birth",
      content: hero.birthPlace,
    },
    {
      title: "Gender",
      content: hero.gender
    },
    {
      title: "Race",
      content: hero.race,
    },
    {
      title: "Height",
      content: hero.height, 
    },
    {
      title: "Weight",
      content: hero.height,
    },
    {
      title: "Alter egos",
      content: hero.weight,
    },
    {
      title: "First appearance",
      content: hero.firstAppearance,
    },
    {
      title: "Alignment",
      content: hero.alignment,
    },
    {
      title: "Work",
      content: hero.work,
    },
    {
      title: "Connections",
      content: hero.connections,
    },
  ];

  const [hasImage, setHasImage] = useState(true);

  const image = newLoading ? (
    <Skeleton wrapper={StyledImageWrapper} borderRadius={'20px'} />
  ) : (
    <StyledImageWrapper>
      <StyledImage src={checkImage(hasImage, hero)} onError={() => setHasImage(false)}/>
    </StyledImageWrapper>
  );

  return (
    <>
      {hero?.name && (
        <SkeletonTheme baseColor='#ebebeb' highlightColor='#d6d6d6' duration={1}>
          <StyledWrapperCard>
            <StyledWrapperLeftPart>
              {image}
              <StatsHeroInfo stats={hero.stats} newLoading={newLoading} />
            </StyledWrapperLeftPart>
            <Description>
              <MainHeroInfo data={information} newLoading={newLoading} />
            </Description>
          </StyledWrapperCard>
        </SkeletonTheme>
      )}
    </>
  );
}

export default HeroBigCard;