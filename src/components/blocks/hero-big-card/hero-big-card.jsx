import { useState, useEffect } from "react";
import { StyledSwiper, StyledWrapperCard, StyledWrapperLeftPart, StyledImageWrapper, StyledImage, Description } from "./styles";
import MainHeroInfo from "/src/components/ui/main-hero-info/main-hero-info";
import StatsHeroInfo from "/src/components/ui/stats-hero-info/stats-hero-info";
import { checkImage } from "../../../utils";

import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import useMediaService from "../../../services/MediaService";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

function HeroBigCard( {hero, newLoading} ) {

  const {isMobile} = useMediaService()

  // List of sections

  const information = [
    {
      title: "Name",
      content: hero.name
    },
    {
      title: "Full name",
      content: hero.fullName,
    },
    {
      title: "Place of birth",
      content: hero.birthPlace,
    },
    {
      title: "Gender",
      content: hero.gender
    },
    {
      title: "Race",
      content: hero.race,
    },
    {
      title: "Height",
      content: hero.height, 
    },
    {
      title: "Weight",
      content: hero.weight,
    },
    {
      title: "Alter egos",
      content: hero.alterEgos,
    },
    {
      title: "First appearance",
      content: hero.firstAppearance,
    },
    {
      title: "Alignment",
      content: hero.alignment,
    },
    {
      title: "Work",
      content: hero.work,
    },
    {
      title: "Connections",
      content: hero.connections,
    },
  ];

  const [hasImage, setHasImage] = useState(true);
  
  useEffect(() => {
    setHasImage(true)
  }, [hero])

  const image = newLoading ? (
    <Skeleton wrapper={StyledImageWrapper} borderRadius={'20px'} />
  ) : (
    <StyledImageWrapper>
      <StyledImage src={checkImage(hasImage, hero)} onError={() => setHasImage(false)}/>
    </StyledImageWrapper>
  );

  return (
    <>

      {hero?.name && (
        <SkeletonTheme baseColor='#ebebeb' highlightColor='#d6d6d6' duration={1}>
          
          
          
          
          {isMobile ?
            <StyledSwiper
              effect={'flip'}
              grabCursor={true}
              pagination={true}
              navigation={true}
              loop={true}
              modules={[EffectFlip, Pagination, Navigation]}
            >
              <SwiperSlide>
                <StyledWrapperCard>
                  <StyledWrapperLeftPart>
                    {image}
                    <StatsHeroInfo stats={hero.stats} newLoading={newLoading} />
                  </StyledWrapperLeftPart>
                </StyledWrapperCard>        
              </SwiperSlide>
              <SwiperSlide>
                <StyledWrapperCard>
                  <Description>
                    <MainHeroInfo data={information} newLoading={newLoading} big={true} />
                  </Description>
                </StyledWrapperCard>
              </SwiperSlide>
            </StyledSwiper>
          : 
          <StyledWrapperCard>
            <StyledWrapperLeftPart>
              {image}
              <StatsHeroInfo stats={hero.stats} newLoading={newLoading} />
            </StyledWrapperLeftPart>
            <Description>
              <MainHeroInfo data={information} newLoading={newLoading} big={true} />
            </Description>
          </StyledWrapperCard>
          }
        </SkeletonTheme>
      )}
    </>
  );
}

export default HeroBigCard;