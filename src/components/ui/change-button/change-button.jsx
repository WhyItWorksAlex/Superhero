import React from "react";
import { StyledButton } from "./styles";
import { getRandomInteger, debounce } from "/src/utils";
import { qtyHeroes } from "/src/const";

function ChangeButton( {name, updateChar, setHero, idArray} ) {

  const handle = () => {
    const randomId = getRandomInteger(1, qtyHeroes)
    updateChar(randomId, setHero, idArray)
  }

  const handleDebounced = debounce(handle);

  return (
    <>
      <StyledButton type='button' onClick={handleDebounced}>Change {name === 'hero1' ? "left" : "right"} character</StyledButton>
    </>
  );
}

export default ChangeButton;