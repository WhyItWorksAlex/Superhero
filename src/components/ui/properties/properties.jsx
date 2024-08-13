import React from "react";
import { StyledProperties, PropertiesList, Property } from "./styles";

function Properties( {hero} ) {
  return (
    <StyledProperties>       
      <PropertiesList>
        <Property key={hero.id + 1}>{hero.powerstats.combat !== 'null' ? hero.powerstats.combat : 25}</Property>
        <Property key={hero.id + 2}>{hero.powerstats.durability}</Property>
        <Property key={hero.id + 3}>{hero.powerstats.intelligence}</Property>
        <Property key={hero.id + 4}>{hero.powerstats.power}</Property>
        <Property key={hero.id + 5}>{hero.powerstats.speed}</Property>
        <Property key={hero.id + 6}>{hero.powerstats.strength}</Property>
      </PropertiesList>
    </StyledProperties>
  );
}

export default Properties;