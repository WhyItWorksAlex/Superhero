import React, { useEffect, useState } from "react";
import { StyledWrapperCard, StyledWrapperLeftPart, StyledImageWrapper, StyledImage, Description } from "./styles";
import MainHeroInfo from "/src/components/ui/main-hero-info/main-hero-info";
import StatsHeroInfo from "/src/components/ui/stats-hero-info/stats-hero-info";


function HeroBigCard( {hero, getStats} ) {

  // List of sections

  const information = [
    {
      title: "Name",
      content: hero.name
    },
    {
      title: "Full name",
      content: hero.biography['full-name'],
    },
    {
      title: "Place of birth",
      content: hero.biography['place-of-birth'],
    },
    {
      title: "Gender",
      content: hero.appearance.gender
    },
    {
      title: "Race",
      content: hero.appearance.race === 'null' ? '-' : hero.appearance.race,
    },
    {
      title: "Height",
      content: (hero.appearance.height[1] === '0 cm' ? '-' : hero.appearance.height[1]), 
    },
    {
      title: "Weight",
      content: (hero.appearance.weight[1] === '0 kg' ? '-' : hero.appearance.weight[1]),
    },
    {
      title: "Alter egos",
      content: hero.biography['alter-egos'],
    },
    {
      title: "First appearance",
      content: hero.biography['first-appearance'],
    },
    {
      title: "Alignment",
      content: hero.biography.alignment
    },
    {
      title: "Work",
      content: hero.work.occupation
    },
    {
      title: "Connections",
      content: hero.connections['group-affiliation']
    },
  ];

  const stats = getStats(hero);

  const [hasImage, setHasImage] = useState(true);

  useEffect (() => {
    setHasImage(true);
  }, [hero])


  return (
    <>
      {hero?.name && (
        <StyledWrapperCard>
          <StyledWrapperLeftPart>
            <StyledImageWrapper>
              <StyledImage src={hasImage ? hero.image.url : 'https://i.ibb.co/WcqzVwy/template-image.png'} onError={() => setHasImage(false)}/>
            </StyledImageWrapper>
            <StatsHeroInfo stats={stats}/>
          </StyledWrapperLeftPart>
          <Description>
            <MainHeroInfo data={information} />
          </Description>
        </StyledWrapperCard>
      )}
    </>

  );
}

export default HeroBigCard;