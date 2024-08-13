import React from "react";
import { StyledNeon, NeonText, NeonLetter, NeonLastLetter } from "./styles";

function Neon( ) {
  return (
    <StyledNeon>  
      <NeonText>Cl
        <NeonLetter>as</NeonLetter>
        h of Sup
        <NeonLetter>er</NeonLetter>
        hero
        <NeonLastLetter>s</NeonLastLetter>
      </NeonText>
    </StyledNeon>
  );
}

export default Neon;