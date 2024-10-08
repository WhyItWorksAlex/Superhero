import { useState } from "react";
import { StyledTabContent, StyledButton, StyledWrapperButtons } from "./styles";
import MainHeroInfo from "/src/components/ui/main-hero-info/main-hero-info";
import StatsHeroInfo from "/src/components/ui/stats-hero-info/stats-hero-info";

function HeroInfo( {hero, newLoading} ) {
  const [activeTab, setActiveTab] = useState(0);

  const mainInformation = [
    {
      title: "Name",
      content: hero.name
    },
    {
      title: "Alignment",
      content: hero.alignment
    },
    {
      title: "Race",
      content: hero.race,
    },
  ];

  const appearanceInformation = [
    {
      title: "Gender",
      content: hero.gender
    },
    {
      title: "Height",
      content: hero.height, 
    },
    {
      title: "Weight",
      content: hero.weight,
    },
  ];

  const tabsList = [
    {
      title: "Main",
      content: <MainHeroInfo data={mainInformation} newLoading={newLoading} />
    },

    {
      title: "Appearance",
      content: <MainHeroInfo data={appearanceInformation} newLoading={newLoading} />
    },
    {
      title: "Stats",
      content: <StatsHeroInfo stats={hero.stats} newLoading={newLoading} />
    },
  ];

  return (
    <>
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
    </>
  );
}

export default HeroInfo;