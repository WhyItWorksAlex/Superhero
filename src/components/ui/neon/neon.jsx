import React from "react";
import { StyledNeon, NeonText, NeonLetter, NeonLastLetter } from "./styles";
import { APPROUTE } from "/src/const";
// import { useLocation } from "react-router-dom";

const Neon = React.memo(( ) => {
  // const pageUrl = useLocation().pathname;

  return (
    <StyledNeon>  
      <NeonText 
        // {...(pageUrl === APPROUTE.MAIN ? { as: "span" } : { to: APPROUTE.MAIN })} // rerender on main page
        {...{ to: APPROUTE.MAIN.to }}
      >Cl
        <NeonLetter>as</NeonLetter>
        h of Sup
        <NeonLetter>er</NeonLetter>
        heroe
        <NeonLastLetter>s</NeonLastLetter>
      </NeonText>
    </StyledNeon>
  );
})

export default Neon;