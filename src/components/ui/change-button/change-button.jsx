import React from "react";
import { StyledButton } from "./styles";
import { getRandomInteger, debounce } from "../../../utils";

function ChangeButton( {name, getApiData} ) {

  const handle = () => {
    const randomId = getRandomInteger(1, 5)
    if (name === 'hero1') {
      getApiData(randomId, 1)

    } else {
      getApiData(randomId, 2)
    }
  }

  const handleDebounced = debounce(handle);

  return (
    <>
      <StyledButton type='button' onClick={handleDebounced}>Change {name === 'hero1' ? "left" : "right"} character</StyledButton>
    </>
  );
}

export default ChangeButton;