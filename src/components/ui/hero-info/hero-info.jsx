import React, { useState } from "react";
import { StyledTabContent, StyledButton, StyledWrapperButtons } from "./styles";
import MainHeroInfo from "../main-hero-info/main-hero-info";

function HeroInfo( {hero} ) {
  const [activeTab, setActiveTab] = useState(0);

  const mainInformation = [
    {
      title: "Name",
      content: hero.name
    },
    {
      title: "Alignment",
      content: hero.biography.alignment
    },
    {
      title: "Race",
      content: hero.appearance.race === 'null' ? '-' : hero.appearance.race,
    },
  ];

  const appearanceInformation = [
    {
      title: "Gender",
      content: hero.appearance.gender
    },
    {
      title: "Height",
      content: (hero.appearance.height[1] === '0 cm' ? '-' : hero.appearance.height[1]), 
    },
    {
      title: "Weight",
      content: (hero.appearance.weight[1] === '0 kg' ? '-' : hero.appearance.weight[1]),
    },
  ];

  const tabsList = [
    {
      title: "Main",
      content: <MainHeroInfo data={mainInformation} />
    },
    {
      title: "Appearance",
      content: <MainHeroInfo data={appearanceInformation} />
    },
    {
      title: "Stats",
      content: 
        <>        
          <span>{hero.id}</span>
          <span>ghbdtn</span>
        </>,
    },
  ];

  return (
    <div>
      <StyledTabContent>{tabsList[activeTab].content}</StyledTabContent>
      <StyledWrapperButtons>
        {tabsList?.length &&
          tabsList.map((tabName, index) => (
            <StyledButton
              key={index}
              $active={index === activeTab}
              {...(index === activeTab
                ? {}
                : { onClick: () => setActiveTab(index) })}
            >
              <span>{tabName.title}</span>
            </StyledButton>
        ))}
      </StyledWrapperButtons>
    </div>
  );
}

export default HeroInfo;