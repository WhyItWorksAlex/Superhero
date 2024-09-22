import { StyledStatsHeroInfo, Li, Span } from "./styles";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function StatsHeroInfo( {stats, newLoading} ) {

  return (
    <StyledStatsHeroInfo>
      {newLoading ? 
        (
          <Skeleton wrapper={Li} count='6'/>
        ) : (
          stats.map((stat) => {
            return (
              <Li key={stat.title} $visible={true}>
                {stat.title}:
                <Span> {stat.content}</Span>
              </Li>
            );
          })
        )
      }                  
    </StyledStatsHeroInfo>
  );
}

export default StatsHeroInfo;