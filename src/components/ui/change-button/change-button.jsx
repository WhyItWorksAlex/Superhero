import React from "react";
import { StyledButton } from "./styles";
import { getRandomInteger, debounce } from "/src/utils";
import { QTYHEROES } from "/src/const";

function ChangeButton( {setHero, idArray, children} ) {
  
  const handle = () => {
    let randomId = getRandomInteger(1, QTYHEROES)
    while (idArray.some((el) => el === randomId)) {
      randomId = getRandomInteger(1, QTYHEROES)
    }
    setHero(randomId)
  }

  const handleDebounced = debounce(handle);

  return (
    <>
      <StyledButton type='button' onClick={handleDebounced}>{children}</StyledButton>
    </>
  );
}

export default ChangeButton;