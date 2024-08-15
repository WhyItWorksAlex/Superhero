import React from "react";
import { StyledStatsHeroInfo, Li, Span } from "./styles";

function StatsHeroInfo( {stats} ) {

  return (
    <StyledStatsHeroInfo>
      {stats.map((stat) => {
        return (
          <Li key={stat.title}>
            {stat.title}:
            <Span> {stat.content}</Span>
          </Li>
        );
      })}              
    </StyledStatsHeroInfo>
  );
}


export default StatsHeroInfo;