import { StyledMainHeroInfo, Li, Span } from "./styles";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function MainHeroInfo( {data, newLoading, short} ) {

  return (
    <StyledMainHeroInfo>
      {newLoading ? 
        (
          data.map((line) => {
            return (
              <Li key={line.title} >
                <Skeleton width={short ? 60 : 100} inline={true}/>
                <Skeleton width={short ? 155 : 350} inline={true}/>
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
