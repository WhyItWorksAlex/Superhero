import React from "react";
import { StyledMainHeroInfo, Li, Span } from "./styles";

function MainHeroInfo( {data} ) {

  return (
    <StyledMainHeroInfo>
      {data.map((line) => {
        return (
          <Li key={line.title}>{line.title}:
            <Span> {line.content}</Span>
          </Li>
        );
      })}              
    </StyledMainHeroInfo>
  );
}

export default MainHeroInfo;
