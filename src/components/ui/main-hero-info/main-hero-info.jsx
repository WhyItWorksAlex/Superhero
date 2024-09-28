import { SkeletonWrapper, StyledMainHeroInfo, Li, Title, Span } from "./styles";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useMediaService from "../../../services/MediaService";

function MainHeroInfo( {data, newLoading, big} ) {

  const {isTablet, isMobile} = useMediaService()

  const skeleton = !isMobile ? (
    <SkeletonWrapper>
      <Skeleton width={!isTablet ? 100 : big ? 60 : 35} inline={true}/>
      <Skeleton width={!isTablet ? 350 : big ? 200 : 80} inline={true}/>
    </SkeletonWrapper> 
  ) : (
    <Skeleton width={120} inline={true}/>
  )

  return (
    <StyledMainHeroInfo>
      {data.map((line) => {
        return (
          <Li key={line.title} >
            {newLoading ? skeleton : 
              <>
                <Title>
                  {line.title}:
                  <Span> {line.content}</Span>
                </Title>                
              </>
            }
          </Li>
        );
      })
      }             
    </StyledMainHeroInfo>
  );
}

export default MainHeroInfo;
