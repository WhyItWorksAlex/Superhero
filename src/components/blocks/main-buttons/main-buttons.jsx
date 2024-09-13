import React from "react";
import ChangeButton from "/src/components/ui/change-button/change-button";
import { StyledMainButtons } from "./styles";


function MainButtons( {updateChar, setHero1, setHero2, idArray} ) {


  return (
    <StyledMainButtons>
      <ChangeButton name='hero1' updateChar={updateChar} setHero={setHero1} idArray={idArray} />
      <ChangeButton name='hero2' updateChar={updateChar} setHero={setHero2} idArray={idArray} />
    </StyledMainButtons>
  );
}

export default MainButtons;