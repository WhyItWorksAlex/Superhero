import React from "react";
import ChangeButton from "/src/components/ui/change-button/change-button";
import { StyledMainButtons } from "./styles";


function MainButtons( {getApiData} ) {


  return (
    <StyledMainButtons>
      <ChangeButton name='hero1' getApiData={getApiData} />
      <ChangeButton name='hero2' getApiData={getApiData} />
    </StyledMainButtons>
  );
}

export default MainButtons;