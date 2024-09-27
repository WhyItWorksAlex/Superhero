import { StyledMainHeroInfo, Li, TitleSpan, Span } from "./styles";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useMediaService from "../../../services/MediaService";

function MainHeroInfo( {data, newLoading, short} ) {

  const {isTablet, isMobile} = useMediaService()

  const skeleton = isTablet ? (
    <Skeleton width={120} inline={true}/>
  ) : (
    <>
      <Skeleton width={short ? 60 : 100} inline={true}/>
      <Skeleton width={short ? 155 : 350} inline={true}/>
    </> 
  )

  return (
    <StyledMainHeroInfo>
      {data.map((line) => {
        return (
          <Li key={line.title} >
            {newLoading ? skeleton : 
              <>
                <TitleSpan>{line.title}:</TitleSpan>
                <Span> {line.content}</Span>
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
