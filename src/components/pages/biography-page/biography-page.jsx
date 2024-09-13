import React, { useState, useEffect } from "react";
import { StyledBiographyPage, P } from "./styles";
import HeroBigCard from "/src/components/blocks/hero-big-card/hero-big-card";
import Search from "/src/components/blocks/search/search";
import Waiting from "/src/components/blocks/waiting/waiting";

function BiographyPage( {updateChar} ) {

  // State with information about biography hero

  const [biographyHero, setBiographyHero] = useState([]);

  useEffect (() => {
    updateChar(644, setBiographyHero)
  }, [])

  return (
    <StyledBiographyPage>
      <P>This section is about heroes information. You can figure out powerstats, biography, appearance, work, connections and so on.</P>
      <Search updateChar={updateChar} setBiographyHero={setBiographyHero} />
      {(Boolean(biographyHero?.name)) ? (
        <HeroBigCard hero={biographyHero} />
      ) : (
        <>
          <Waiting $isFunny={false}/>
        </>
      )}
    </StyledBiographyPage>
  );
}

export default BiographyPage;