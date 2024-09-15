import React from "react";
import { StyledMainHeroInfo, Li, Span } from "./styles";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MainHeroInfo( {data, newLoading} ) {

  return (
    <StyledMainHeroInfo>
      {newLoading ? 
        (
          data.map((line) => {
            return (
              <Li key={line.title} >
                <Skeleton width={100} inline={true}/>
                <Skeleton width={350} inline={true}/>
              </Li>
            );
          })
        ) : (
          data.map((line) => {
            return (
              <Li key={line.title} $visible={true}>
                {line.title}:
                <Span> {line.content}</Span>
              </Li>
            );
          })
        )
      }             
    </StyledMainHeroInfo>
  );
}

export default MainHeroInfo;
