import React, { useEffect } from "react";
import { StyledBiographyPage, P } from "./styles";
import HeroBigCard from "../../blocks/hero-big-card/hero-big-card";
import Search from "../../blocks/search/search";

function BiographyPage( {biographyHero, getApiData, getStats} ) {

  useEffect (() => {
    getApiData(644, 3)
  }, [])

  return (
    <StyledBiographyPage>
      <P>This section is about heroes information. You can figure out powerstats, biography, appearance, work, connections and so on.</P>
      <Search getApiData={getApiData}/>
      {(Boolean(biographyHero?.name)) ? (
        <HeroBigCard hero={biographyHero} getStats={getStats}/>
      ) : (
        <>
          <p style={{color: 'red'}}>Ожидаем данные</p>
        </>
      )}
    </StyledBiographyPage>
  );
}

export default BiographyPage;